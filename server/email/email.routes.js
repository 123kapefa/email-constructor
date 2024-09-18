import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import {
	createNewEmail,
	deleteEmail,
	getEmails,
	getEmail,
	updateEmail
} from './email.controller.js'

const router = express.Router()

router.route('/addEmail').post(protect, createNewEmail)

router.route('/').post(protect, getEmails)

router.route('/:id').post(protect, getEmail)

router.route('/updateEmail/:id').post(protect, updateEmail)

router.route('/deleteEmail/:id').post(protect, deleteEmail)

export default router
