import Button from '../../../ui-elements/button/Button.jsx'
import Field from '../../../ui-elements/field/Field.jsx'

import styles from './Auth.module.scss'
import Layout from '../../Layout.jsx'
import { useAuthPage } from './useAuthPage.js'


const Auth = () => {
	const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
		useAuthPage()
	
	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className={styles.wrapperInnerPage}>
				{isLoading && 'Загрузка...'}
				<form onSubmit={handleSubmit(onSubmit)} style={{width:'400px'}}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Enter email'
					/>

					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>

					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth