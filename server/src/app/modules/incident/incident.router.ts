import express from 'express'
import { IncidentController } from './incident.controller'
const router = express.Router()

router.get('/:id', IncidentController.getSingleIncident)
router.get('/', IncidentController.getAllIncidents)
router.post('/', IncidentController.createAnIncident)
router.patch('/:id', IncidentController.updateAnIncident)
router.delete('/:id', IncidentController.deleteAnIncident)

export const IncidentRoutes = router
