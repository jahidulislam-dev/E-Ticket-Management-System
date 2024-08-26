import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import { IUser } from './user.interface'
import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'

const getSingleUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await UserService.getSingleUser(id)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user retrived successfully',
    data: result,
  })
})

export const UserController = {
  getSingleUser,
}
