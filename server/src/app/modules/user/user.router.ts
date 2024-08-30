import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { userValidation } from './user.validation'
import { UserController } from './user.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
const router = express.Router()

router.get(
  '/my-profile',
  auth(ENUM_USER_ROLE.USER),
  UserController.getMyProfile
)

router.patch(
  '/my-profile',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  validateRequest(userValidation.updateUserZodSchema),
  UserController.updateMyProfile
)

router.patch(
  '/user-email-update',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(userValidation.updateUserEmailUpdateZodSchema),
  UserController.updateUserEmail
)

router.patch(
  '/user-password-update',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(userValidation.updateUserPasswordUpdateZodSchema),
  UserController.updateUserPassword
)

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getSingleUser)

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteUser)

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(userValidation.updateUserZodSchema),
  UserController.updateUser
)

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUser)

export const UserRouter = router
