import 'colors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { prisma } from './prisma.js'

import { errorHandler, notFound } from './middleware/error.middleware.js'

import authRoutes from './auth/auth.routes.js'
import userRoutes from './user/user.routes.js'
import emailRoutes from './email/email.routes.js'

dotenv.config()

const app = express()

async function main() {
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

	app.use(express.json())
	app.use('/api/auth', authRoutes)
	app.use('/api/users', userRoutes)
	app.use('/api/emails', emailRoutes)

	app.use(notFound)
	app.use(errorHandler)

	const PORT = process.env.PORT || 7001

	app.listen(
		PORT,
		console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold)
	)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
