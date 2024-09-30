import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { getUserProfile, updateUser } from './user.controller.js'

const router = express.Router()

router.route('/profile/:userId').get(protect, getUserProfile)

router.route('/profile/:userId').put(protect, updateUser)

export default router
