import Cookies from 'js-cookie'
import { createContext, useState } from 'react'

import { TOKEN } from '../app.constans.js'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))
	const [userId, setUserId] = useState(null)

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, userId, setUserId }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider