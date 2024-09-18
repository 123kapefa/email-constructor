import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

// @desc    Create email
// @route   POST /api/emails
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

// @desc    Update email
// @route   PUT /api/emails/:id
// @access  Private
export const updateEmail = asyncHandler(async (req, res) => {
	const { emailTo, emailFrom, title, content } = req.body
	
	try {
		const email = await prisma.emails.update({
			where: {
				id: Number(req.params.id)
			},
			data: {
				emailTo,
				emailFrom,
				title,
				content
			}
		})
		//res.json(req.body)
		res.json(email)
	} catch (error) {
		res.status(404)
		throw new Error("Нет такого письма!")
	}
})

// @desc    Delete email
// @route   DELETE /api/emails/:id
// @access  Private
export const deleteEmail = asyncHandler(async (req, res) => {
	const { emailTo, emailFrom, title, content } = req.body
	
	try {
		const email = await prisma.emails.delete({
			where: {
				id: Number(req.params.id)
			}
		})
		//res.json(req.body)
		res.json({ message: 'Письмо успешно удалено!' })
	} catch (error) {
		res.status(404)
		throw new Error("Нет такого письма!")
	}
})

// @desc    Get email
// @route   GET /api/email/:id
// @access  Private
export const getEmail = asyncHandler(async (req, res) => {
	try {
	
	const email = await prisma.emails.findUnique({
		where: { id: Number(req.params.id) },
	})
	
	res.json(email)
	} catch (error) {
		res.status(404)
		throw new Error("Нет такого письма!")
	}
})

// @desc    Get emails
// @route   GET /api/emails
// @access  Private
export const getEmails = asyncHandler(async (req, res) => {
	const emails = await prisma.emails.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	})
	
	res.json(emails)
})

