import logoImg from '../../assets/logo-group.svg';
import { Container, Content } from './styles';

export function Header() {
	return(
		<Container>
			<Content>
				<img src={logoImg} alt="my money"/>
				<button type="button">
					nova transação
				</button>
			</Content>
		</Container>
	)
}