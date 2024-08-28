import express from 'express'
import { SupportController } from './support.controller'
const router = express.Router()

router.get('/', SupportController.getAllSupport)
router.post('/', SupportController.createSupport)

export const SupportRoutes = router
