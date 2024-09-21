import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { UserFields } from '../utils/user.utils.js'

// @desc    Create email
// @route   POST /api/mails
// @access  Private
export const createNewEmail = asyncHandler(async (req, res) => {
	const { emailTo, emailFrom, title, content } = req.body
	
	// const userTo = await prisma.user.findUnique({
	// 		where: {
	// 			email: emailTo
	// 		},
	// 		select: UserFields
	// })
	//
	// const userFrom = await prisma.user.findUnique({
	// 		where: {
	// 			email: emailFrom
	// 		},
	// 		select: UserFields
	// })
	//
	// if (!userTo)  {
	// 	res.status(400)
	// 	throw new Error('Неправильно указан получатель!')
	// }
	//
	// if (!userFrom)  {
	// 	res.status(400)
	// 	throw new Error('Неправильно указан отправитель!')
	// }
	//
	// const email = await prisma.email.create({
	// 	data: {
	// 		emailTo: userTo.id, emailFrom: userFrom.id, title, content
	// 	}
	//
	// })
	//
	// res.json(email)
	
	res.json(req.body)
})
