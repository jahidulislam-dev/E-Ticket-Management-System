import express from 'express'
import { BusController } from './bus.controller'
const router = express.Router()

router.get('/', BusController.getAllBus)
router.post('/', BusController.createBus)

router.patch('/image/:id', BusController.updateBusImage)

router.patch('/:id', BusController.updateBus)
router.get('/:bus_code', BusController.getSingleBus)
router.delete('/:bus_code', BusController.deleteBus)

router.post('/get-available-buses', BusController.getAvailableBusController)

router.post(
  '/seat-view-for-booking',
  BusController.seatViewForBookingController
)

export const BusRoutes = router
