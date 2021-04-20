import { useContext } from "react";
import { Container } from "./styles";
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/dolar-sign.svg'
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
	const {transactions} = useContext(TransactionsContext);

	const summary = transactions.reduce((acc, transaction) => {
		if(transaction.type === 'deposit') {
			acc.deposits += transaction.amount;
			acc.total += transaction.amount;
		} else {
			acc.withdraws += transaction.amount;
			acc.total -= transaction.amount;
		}

		return acc;
	}, {
		deposits: 0,
		withdraws: 0,
		total: 0
	})

	return(
		<Container>
			<div>
				<header>
					<p>entradas</p>
					<img src={incomeImg} alt="entradas"/>
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.deposits)}
				</strong>
			</div>
			
			<div>
				<header>
					<p>saídas</p>
					<img src={outcomeImg} alt="entradas"/>
				</header>
				<strong>
					- {new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						}).format(summary.withdraws)}
				</strong>
			</div>
			
			<div className="highlight">
				<header>
					<p>total</p>
					<img src={totalImg} alt="entradas"/>
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	)
}