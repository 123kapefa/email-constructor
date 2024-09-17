import parse from 'html-react-parser'
import { emailService } from '../../services/email.service.js'
import styles from './EmailList.module.css'
import { useQuery } from '@tanstack/react-query'

export function EmailList() {
	// const { data } = useQuery({
	// 	queryKey: ['email list'],
	// 	queryFn: () => emailService.getEmails(),
	// })
	
	return (
		<div>EmailList
			{/*<div className={styles.list}>*/}
			{/*	{data?.map(email => (*/}
			{/*		<div>{parse(email.text)}</div>*/}
			{/*	))}*/}
			{/*</div>*/}
		</div>
	)
}