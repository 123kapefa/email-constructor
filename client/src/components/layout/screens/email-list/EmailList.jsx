import parse from 'html-react-parser'
import { useAuth } from '../../../../hooks/useAuth.js'
import { emailService } from '../../../../services/email.service.js'
import Layout from '../../Layout.jsx'
//import { emailService } from '../../../../services/email.service.js'
import styles from './EmailList.module.scss'
import { useQuery } from '@tanstack/react-query'

export function EmailList() {
	
	const { userId } = useAuth()
	
	const { data } = useQuery({
		queryKey: ['email list'],
		queryFn: () => emailService.getEmails(userId),
	})
	
	return (
		<div>
			<Layout>
				<h1>Список писем</h1>
				<div className={styles.list}>
					{data?.sentEmails?.map(email => (
						<div className={styles.emailMessage} key={email.id}>
							<div className={styles.emailInfoUser}>
								{ "кому: " + (email.emailToUser.email)}
							</div>
							<div className={styles.messageTitle}>
								{parse(email.title)}
							</div>
							<div className={styles.messageContext}>
								{parse(email.context)}
							</div>
						</div>
					))}
				</div>
			</Layout>
		</div>
	)
}