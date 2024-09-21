import { Cookie } from 'lucide-react'
import { $axios } from '../api.js'
import { TOKEN } from '../app.constans.js'


class AuthService {
	async main(email, password, type) {
		try {
			const {data} = await $axios.post(`/auth/${type}`, {
				email,
				password
			})
			
			if (data.token) Cookie.set(TOKEN, data.token)
			
			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default new AuthService()