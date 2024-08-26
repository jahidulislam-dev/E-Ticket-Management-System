import express from 'express'
import { UserRouter } from '../modules/user/user.router'

const router = express.Router()

const moduleRoutes = [{ path: '/users', router: UserRouter }]

moduleRoutes.forEach(route => router.use(route.path, route.router))

export default router
