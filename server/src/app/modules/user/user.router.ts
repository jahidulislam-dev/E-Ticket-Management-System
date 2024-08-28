import express from 'express'
import { UserController } from './user.controller'
const router = express.Router()

router.get('/my-profile', UserController.getMyProfile)

router.patch('/my-profile', UserController.updateMyProfile)

router.patch('/user-email-update', UserController.updateUserEmail)

router.patch('/user-password-update', UserController.updateUserPassword)

router.get('/:id', UserController.getSingleUser)

router.delete('/:id', UserController.deleteUser)

router.patch('/:id', UserController.updateUser)

router.get('/', UserController.getAllUser)

export const UserRouter = router
