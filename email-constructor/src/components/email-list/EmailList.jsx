import { useQuery } from '@tanstack/react-query'
import parse from 'html-react-parser'
import { emailService } from '../../services/email.service'

export function EmailList() {
	const { data } = useQuery({
		queryKey: ['email list'],
		queryFn: () => emailService.getEmails(),
	})

	return (
		<div >
			{data?.map(email => (
				<div key={email.text}>{parse(email.text)}</div>
			))}
		</div>
	)
}
