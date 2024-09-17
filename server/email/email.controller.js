import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { UserFields } from '../utils/user.utils.js'

// @desc    Create email
// @route   POST /api/mails
// @access  Private
export const createNewEmail = asyncHandler(async (req, res) => {
	const { emailTo, emailFrom, title, content } = req.body
	
	// const email = await prisma.emails.create({
	// 	data: {
	// 		emailTo, emailFrom, title, content
	// 	}
	//
	// })
	//
	// res.json(email)
	res.json(req.body)
	
	
})
