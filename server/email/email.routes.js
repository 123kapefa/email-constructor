import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { createNewEmail } from './email.controller.js'

const router = express.Router()

router.route('/addEmail').post(protect, createNewEmail)

export default router
