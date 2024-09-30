import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from './app.constans.js'

const API_URL = 'http://localhost:7001/api'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : ''
	}
})