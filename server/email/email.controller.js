import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { EmailFields, UserFields, UserMessages } from '../utils/user.utils.js'

// @desc    Send new email
// @route   POST /api/mails/sendEmail/:id
// @access  Private
export const sendNewEmail = asyncHandler(async (req, res) => {
	const { title, context } = req.body
	
	console.log(req.params.userIdFrom, req.params.userEmailTo)
	
	const userFrom = await prisma.user.findUnique({
			where: {
				id: +req.params.userIdFrom
			},
			select: UserFields
	})
	
		console.log({userFrom})
	
	const userTo = await prisma.user.findUnique({
			where: {
				email: req.params.userEmailTo
			},
			select: UserFields
	})

	console.log({userTo})
	console.log({title, context})
	
	if (!userTo)  {
		res.status(400)
		throw new Error('Неправильно указан получатель!')
	}

	if (!userFrom)  {
		res.status(400)
		throw new Error('Неправильно указан отправитель!')
	}

	console.log(userFrom.id, userTo.id)
	
	const email = await prisma.email.create({
		data: {
			emailTo: userTo.id,
			emailFrom: userFrom.id,
			title: title,
			context: context
		},
		select: EmailFields
	})
	
	console.log(email)

	res.json(email)
})

// @desc    get emails
// @route   Get /api/mails/getEmails
// @access  Private
export const getEmails = asyncHandler(async (req, res) => {
	
	const userMessages = await prisma.user.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			sentEmails: {
				include: {
					emailToUser: {
						select: {
							email: true}
					}
				}
			},
			receivedEmails: {
				include: {
					emailFromUser: {
						select: {
							email: true
						}
					}
				}
			}
		}
	})
	
	if (!userMessages)  {
		res.status(400)
		throw new Error('Неправильно указан получатель!')
	}

	res.json(userMessages)
})
