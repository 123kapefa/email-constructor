import parse from 'html-react-parser'
import { emailService } from '../../../../services/email.service.js'
import Layout from '../../Layout.jsx'
//import { emailService } from '../../../../services/email.service.js'
import styles from './EmailList.module.scss'
import { useQuery } from '@tanstack/react-query'

export function EmailList() {
	const { data } = useQuery({
		queryKey: ['email list'],
		queryFn: () => emailService.getEmails(),
	})
	
	return (
		<div>
			<Layout>
				<h1>Список писем</h1>
				<div className={styles.list}>
					{data?.map(email => (
						<div key={email.text}>{parse(email.text)}</div>
					))}
				</div>
			</Layout>
		</div>
	)
}