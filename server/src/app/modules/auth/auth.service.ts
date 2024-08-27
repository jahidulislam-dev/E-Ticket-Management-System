/* eslint-disable no-constant-condition */
import httpStatus from 'http-status'
import mongoose from 'mongoose'
import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IDriver } from '../driver/driver.interface'
import { Driver } from '../driver/driver.model'
import { generatedDriverCode } from '../driver/driver.utils'
import { User } from '../user/user.model'
import { Admin } from '../admin/admin.modal'

const createDriver = async (payload: IDriver): Promise<any> => {
  const driverData = { ...payload }
  const driver_code = await generatedDriverCode() // generated driver code

  let newDriverData = null
  const session = await mongoose.startSession()
  try {
    session.startTransaction()

    const isEmailHas = await User.findOne({ email: payload.email })
    if (isEmailHas) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'email is not a valid email')
    }
    const isPhoneHas = await Driver.findOne({ phone: payload.phone })
    if (isPhoneHas) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'phone is not a valid phone')
    }
    //array
    driverData.joining_date = new Date().toISOString()
    driverData.driver_code = driver_code
    const newDriver = await Driver.create([driverData], { session })
    if (!newDriver.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create a driver')
    }

    const user = {
      name: payload.name,
      email: payload.email,
      driver_id: newDriver[0]._id,
      role: 'driver',
      password: config.default_driver_password as string,
    }

    const newUser = await User.create([user], { session })

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user')
    }
    // TODO: send a welcome email to driver email.
    newDriverData = newUser[0]

    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }

  if (newDriverData) {
    newDriverData = await User.findOne({ _id: newDriverData.id })
      .populate('driver_id')
      .populate('traveler_id')
      .populate('admin_id')
  }
  return { result: newDriverData }
}

const createAdmin = async (payload: IDriver): Promise<any> => {
  const adminData = { ...payload }
  let newAdminAllData = null
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    //array
    const newAdmin = await Admin.create([adminData], { session })
    if (!newAdmin.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create a admin')
    }

    const user = {
      name: payload.name,
      email: payload.email,
      admin_id: newAdmin[0]._id,
      role: 'admin',
      password: config.default_admin_password as string,
    }

    const newUser = await User.create([user], { session })

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user')
    }
    newAdminAllData = newUser[0]

    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }

  if (newAdminAllData) {
    newAdminAllData = await User.findOne({ _id: newAdminAllData.id })
      .populate('driver_id')
      .populate('traveler_id')
      .populate('admin_id')
  }
  return { result: newAdminAllData }
}

export const AuthService = {
  createDriver,
  createAdmin
}
