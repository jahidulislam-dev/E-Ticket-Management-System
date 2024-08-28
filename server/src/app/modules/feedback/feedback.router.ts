import express from 'express'
import { FeedbackController } from './feedback.controller'
const router = express.Router()

router.get('/', FeedbackController.getAllFeedback)
router.get('/approved-feedbacks', FeedbackController.getApprovedFeedbacks) // Publish
router.post('/', FeedbackController.createFeedback)

router.patch(
  '/admin-approved-feedback',
  FeedbackController.updateAdminApprovedFeedback
)

router.patch('/:id', FeedbackController.updateFeedback)
router.get('/:user_id', FeedbackController.getSingleUserFeedback)
router.delete('/:id', FeedbackController.deleteFeedback)

export const FeedbackRoutes = router
