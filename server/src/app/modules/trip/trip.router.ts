import express from 'express'
import { TripController } from './trip.controller'
const router = express.Router()

router.get('/', TripController.getAllTrip) //done testing
router.get('/up-coming', TripController.getUpComingTrip) //done testing // for user dashboard // upcoming-trip and complete trip

router.post(
  '/update-trip-data-and-time',
  TripController.UpdateDateAndTimeFromAdminPanel
)

router.post('/', TripController.createTrip)
router.get('/update-able-trip', TripController.getAllUpdateAbleTrip)

router.patch('/:id', TripController.updateTrip) //done testing

router.get('/:id', TripController.getSingleTrip)

/* public API */
router.post('/get-trips-by-users', TripController.getTripsByUsersController)
router.post(
  '/get-bus-seat-status-on-trip',
  TripController.getBusSeatStatusOnTripController
)

export const TripRoutes = router
