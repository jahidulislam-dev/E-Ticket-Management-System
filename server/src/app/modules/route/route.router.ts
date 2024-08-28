import express from 'express'
import { RouteController } from './route.controller'
const router = express.Router()

router.get('/', RouteController.getAllRoute)
router.post('/', RouteController.createRoute)
router.patch('/:_id', RouteController.updateRoute)
router.get('/:_id', RouteController.getSingleRoute)
router.delete('/:_id', RouteController.deleteRoute)

export const RouteRoutes = router
