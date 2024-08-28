import express from 'express'
import { AuthController } from './auth.controller'
const router = express.Router()

router.post(
  '/signup',
  AuthController.createUser
)
router.post(
  '/admin/create-driver',
  AuthController.createDriver
)

router.post(
  '/admin/create-admin',
  AuthController.createAdmin
)

router.post(
  '/login',
  AuthController.login
)

router.post(
  '/refresh-token',
  AuthController.refreshToken
)

router.post('/google_auth', AuthController.googleAuth)

export const AuthRouter = router
