import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

import AuthService from '../../../../services/auth.service.js'
import Button from '../../../ui-elements/button/Button.jsx'
import Field from '../../../ui-elements/field/Field.jsx'

import styles from './Auth.module.scss'
import { useForm } from 'react-hook-form'
import Layout from '../../Layout.jsx'


const Auth = () => {
	const [type, setType] = useState('login')
	
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})
	
	const { mutate, isLoading } = useMutation({
		mutationKey: ['auth'],
		mutationFn: ({email, password}) => AuthService.main(email, password, type),
		onSuccess: data => {
			alert('success')
			reset()
		}
	})

	const onSubmit = data => {
		mutate(data)
	}
	
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