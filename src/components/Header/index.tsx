import logoImg from '../../assets/logo-group.svg';
import { Container, Content } from './styles';

interface HeaderProps {
	onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {

	return(
		<Container>
			<Content>
				<img src={logoImg} alt="my money"/>
				<button type="button" onClick={onOpenNewTransactionModal}>
					nova transação
				</button>

				
			</Content>
		</Container>
	)
}