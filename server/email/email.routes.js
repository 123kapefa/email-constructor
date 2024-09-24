import express from 'express'
import { protect } from '../middleware/auth.middleware.js'

import { getEmails, sendNewEmail } from './email.controller.js'

const router = express.Router()

router.route('/sendEmail/:userIdFrom/:userEmailTo').post(protect, sendNewEmail)
router.route('/getEmails/:id').get(protect, getEmails)

export default router
