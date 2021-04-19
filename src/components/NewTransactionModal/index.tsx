import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/x.svg';

import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

Modal.setAppElement('#root'); // Por questões de acessibilidade, dizemos ao Modal qual é o elemento principal da aplicação. Com isso, o elemento principal diz ao usuário que está com acessibilidade ligada que essa parte principal da aplicação não está acessível, pois o modal está aberto.

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
	return(
		<Modal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				overlayClassName="react-modal-overlay"
				className="react-modal-content"
		>

			<button 
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<img src={closeImg} alt="fechar modal"/>
			</button>

			<Container>
				<h2>cadastrar transação</h2>

				<input 
					placeholder="título"
				/>

				<input 
					type="number"
					placeholder="valor"
				/>

				<TransactionTypeContainer>
					<button type="button">
						<img src={incomeImg} alt="entrada"/>
						<span>entrada</span>
					</button>
					
					<button type="button">
						<img src={outcomeImg} alt="entrada"/>
						<span>saída</span>
					</button>

				</TransactionTypeContainer>

				<input 
					placeholder="categoria"
				/>

				<button type="submit">
					cadastrar
				</button>

			</Container>
		</Modal>
	)
}