import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { UserFields } from '../utils/user.utils.js'

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			id: req.user.id
		},
		select: UserFields
	})
	
	res.json(user)
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
	export const updateUser = asyncHandler(async (req, res) => {
		
		const { login, email, password } = req.body
		
		const user = await prisma.user.update({
			where: {
				id: +req.user.id
			},
			data: {
				login,
				email,
				password
			}
		})
		
		res.json(user)
	})

