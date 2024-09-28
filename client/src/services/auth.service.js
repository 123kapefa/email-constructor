import Cookie from 'js-cookie'
import { $axios } from '../api.js'
import { TOKEN, UID } from '../app.constans.js'


class AuthService {
	async main(type, email, password, login = '') {
		try {
			if (type === 'login') {
				const {data} = await $axios.post(`/auth/${type}`, {
				email,
				password
			})
			
				Cookie.set(UID, data.user.id)
				
			if (data.token) Cookie.set(TOKEN, data.token)
			return data
			
			} else {
				const {data} = await $axios.post(`/auth/${type}`, {
				login,
				email,
				password
			})
				
				Cookie.set(UID, data.user.id)
			
			if (data.token) Cookie.set(TOKEN, data.token)
				return data
				
			}
		} catch (error) {
			
			console.log(error)
			throw new Error(error)
		}
	}
}

export default new AuthService()