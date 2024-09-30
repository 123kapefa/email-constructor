import asyncHandler from 'express-async-handler'
import process from 'prisma'

import { prisma } from '../prisma.js'
import { EmailFields, UserFields, UserMessages } from '../utils/user.utils.js'

// @desc    Send new email
// @route   POST /api/mails/sendEmail/:id
// @access  Private
export const sendNewEmail = asyncHandler(async (req, res) => {
	const { title, context } = req.body
	
	const userFrom = await prisma.user.findUnique({
			where: {
				id: +req.params.userIdFrom
			},
			select: UserFields
	})
	
	const userTo = await prisma.user.findUnique({
			where: {
				email: req.params.userEmailTo
			},
			select: UserFields
	})
	
	if (!userTo)  {
		res.status(400)
		throw new Error('Неправильно указан получатель!')
	}

	if (!userFrom)  {
		res.status(400)
		throw new Error('Неправильно указан отправитель!')
	}
	
	const email = await prisma.email.create({
		data: {
			emailTo: userTo.id,
			emailFrom: userFrom.id,
			title: title,
			context: context
		},
		select: EmailFields
	})

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
