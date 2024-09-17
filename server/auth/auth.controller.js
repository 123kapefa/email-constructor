import { faker } from '@faker-js/faker'
import { hash, verify } from 'argon2'
import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { UserFields } from '../utils/user.utils.js'

import { generateToken } from './generate-token.js'

export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	// res.json(req.body)
	//
	// return
	
	const user = await prisma.users.findUnique({
		where: {
			email: email
		}
	})

	// res.json(user)
  // return
	
	const isValidPassword = await verify(user.password, password)

	if (user && isValidPassword) {
		const token = generateToken(user.id)
		res.json({ user, token })
	} else {
		res.status(401)
		throw new Error('Email and password are not correct')
	}
})

export const registerUser = asyncHandler(async (req, res) => {
	
	const { email, password } = req.body

	const isHaveUser = await prisma.users.findUnique({
		where: {
			email
		}
	})

	if (isHaveUser) {
		res.status(400)
		throw new Error('User already exists')
	}

	const user = await prisma.users.create({
		data: {
			email,
			password: await hash(password),
			name: faker.name.fullName()
		},
		select: UserFields
	})

	const token = generateToken(user.id)

	res.json({ user, token })
})
