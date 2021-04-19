import Modal from 'react-modal'
import { Container, TransactionTypeContainer, TypeBox } from './styles';
import closeImg from '../../assets/x.svg';

import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

Modal.setAppElement('#root'); // Por questões de acessibilidade, dizemos ao Modal qual é o elemento principal da aplicação. Com isso, o elemento principal diz ao usuário que está com acessibilidade ligada que essa parte principal da aplicação não está acessível, pois o modal está aberto.

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
	const [type, setType] = useState('deposit');

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
					<TypeBox 
						type="button"
						onClick={() => setType('deposit')}
						isActive={type === 'deposit'}
						activeColor="green"
						>
						<img src={incomeImg} alt="entrada"/>
						<span>entrada</span>
					</TypeBox>
					
					<TypeBox
						type="button"
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
						activeColor="red"
					>
						<img src={outcomeImg} alt="entrada"/>
						<span>saída</span>
					</TypeBox>

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