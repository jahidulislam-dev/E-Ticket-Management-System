import express from 'express'
import { ReserveBusController } from './reserveBus.controller'
const router = express.Router()

router.get('/', ReserveBusController.getAllReserveBus)
router.post('/', ReserveBusController.reserveBusRequest)
router.patch('/:id', ReserveBusController.updateReserveBus)

router.get('/:user_id', ReserveBusController.getSingleUserReserveBus)
router.delete('/:id', ReserveBusController.deleteReserveBus)

export const ReserveBusRoutes = router
