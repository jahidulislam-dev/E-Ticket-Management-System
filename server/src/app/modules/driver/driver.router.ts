import express from 'express'
import { DriverController } from './driver.controller'

const router = express.Router()

router.get('/', DriverController.getAllDrivers)
router.patch('/:id', DriverController.updateDriver)
router.get('/:id', DriverController.getSingleDriver)

router.post(
  '/get-available-drivers',
  DriverController.getAvailableDriverController
)

export const DriverRouter = router
