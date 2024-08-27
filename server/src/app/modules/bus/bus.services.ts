/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status'
import { SortOrder } from 'mongoose'
import ApiError from '../../../errors/ApiError'
import { paginationHelper } from '../../../helper/paginationHelper'
import { IGenericResponse } from '../../../interfaces/common'
import { IPaginationOptions } from '../../../interfaces/pagination'
import { IBus, IBusFilter } from './bus.interface'
import { Bus } from './bus.model'
import { generatedBusCode } from './bus.utils'

const createBus = async (payload: IBus): Promise<any> => {
  const bus_code = await generatedBusCode() // generated bus code
  payload.bus_code = bus_code
  const newBus = await Bus.create(payload)
  if (!newBus) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create bus')
  }
  return newBus
}

const getAllBus = async (
  filters: IBusFilter,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBus[]>> => {
  const { searchTerm, ...filtersData } = filters

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      $or: busSearchableFields?.map((field: any) => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions)

  const sortCondition: '' | { [key: string]: SortOrder } = sortBy &&
    sortOrder && { [sortBy]: sortOrder }

  const whereCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {}

  const result = await Bus.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)

  const total = await Bus.countDocuments(whereCondition)

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const getSingleBus = async (id: string): Promise<IBus | null> => {
  const bus_code = id.toLocaleUpperCase()
  const result = await Bus.findOne({ bus_code })
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Bus not found!')
  }
  return result
}

const updateBus = async (
  id: string,
  payload: Partial<IBus>
): Promise<IBus | null> => {
  const isExist = await Bus.findById(id)
  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Bus not found!')
  }

  const { model, brand_name, total_seats } = payload

  const updatePayload: {
    model?: string
    brand_name?: string
    total_seats?: string[]
  } = {}

  if (model !== undefined) updatePayload.model = model
  if (brand_name !== undefined) updatePayload.brand_name = brand_name
  if (total_seats !== undefined) updatePayload.total_seats = total_seats

  const result = await Bus.findByIdAndUpdate(
    id,
    { $set: updatePayload },
    {
      new: true,
    }
  )
  return result
}

const deleteBus = async (id: string): Promise<IBus | null> => {
  const bus_code = id.toLocaleUpperCase()
  const result = await Bus.findOneAndDelete({ bus_code })
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Bus not found!')
  }
  return result
}

export const BusService = {
  createBus,
  getAllBus,
  getSingleBus,
  updateBus,
  deleteBus,
}
