/* eslint-disable no-constant-condition */
import httpStatus from 'http-status'
import mongoose from 'mongoose'
import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { Admin } from '../admin/admin.modal'
import { IDriver } from '../driver/driver.interface'
import { Driver } from '../driver/driver.model'
import { Traveler } from '../traveler/traveler.modal'
import { IUser } from '../user/user.interface'
import { User } from '../user/user.model'
import { generatedDriverCode } from '../driver/driver.utils'

const createTraveler = async (payload: IUser): Promise<any> => {
  let newUserAllData: IUser | null = null

  const user = new User()
  const isUserExist = await user.isUserExist(payload.email)

  if (isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'email already exists')
  }
  const session = await mongoose.startSession()
  try {
    session.startTransaction()

    //array
    const newTraveler = await Traveler.create([payload], { session })
    if (!newTraveler.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create a traveler')
    }

    const user = {
      ...payload,
      traveler_id: newTraveler[0]._id,
      role: 'traveler',
    }

    const newUser = await User.create([user], { session })

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user')
    }
    newUserAllData = newUser[0]

    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ _id: newUserAllData._id })
      .populate('driver_id')
      .populate('traveler_id')
      .populate('admin_id')
  }
  let accessToken
  let refreshToken

  return { result: newUserAllData, refreshToken, accessToken }
}

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
  createTraveler,
  createDriver,
  createAdmin,
}
