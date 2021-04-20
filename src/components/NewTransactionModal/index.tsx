import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, TypeBox } from './styles';
import closeImg from '../../assets/x.svg';

import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

Modal.setAppElement('#root'); // Por questões de acessibilidade, dizemos ao Modal qual é o elemento principal da aplicação. Com isso, o elemento principal diz ao usuário que está com acessibilidade ligada que essa parte principal da aplicação não está acessível, pois o modal está aberto.

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
	const {createTransaction} = useContext(TransactionsContext);

	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState('');

	const [type, setType] = useState('deposit');

	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault(); // previne o carregamento padrão do submit

		createTransaction({
			title,
			amount,
			category,
			type
		});
	}

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

			<Container onSubmit={handleCreateNewTransaction} >
				<h2>cadastrar transação</h2>

				<input 
					placeholder="título"
					value={title}
					onChange={event => setTitle(event.target.value)}
				/>

				<input 
					type="number"
					placeholder="valor"
					value={amount}
					onChange={event => setAmount(+event.target.value)}
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
					value={category}
					onChange={event => setCategory(event.target.value)}
				/>

				<button type="submit">
					cadastrar
				</button>

			</Container>
		</Modal>
	)
}