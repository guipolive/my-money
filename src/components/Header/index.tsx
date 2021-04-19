import { useState } from 'react';
import Modal from 'react-modal'
import logoImg from '../../assets/logo-group.svg';
import { Container, Content } from './styles';

export function Header() {

	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}
	
	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

	return(
		<Container>
			<Content>
				<img src={logoImg} alt="my money"/>
				<button type="button" onClick={handleOpenNewTransactionModal}>
					nova transação
				</button>

				<Modal
					isOpen={isNewTransactionModalOpen}
					onRequestClose={handleCloseNewTransactionModal}
				>
					<h2>cadastrar transação</h2>
				</Modal>
			</Content>
		</Container>
	)
}