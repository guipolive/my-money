import { Container } from "./styles";
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/dolar-sign.svg'

export function Summary() {
	return(
		<Container>
			<div>
				<header>
					<p>entradas</p>
					<img src={incomeImg} alt="entradas"/>
				</header>
				<strong>R$1000,00</strong>
			</div>
			
			<div>
				<header>
					<p>saídas</p>
					<img src={outcomeImg} alt="entradas"/>
				</header>
				<strong>- R$1000,00</strong>
			</div>
			
			<div className="highlight">
				<header>
					<p>total</p>
					<img src={totalImg} alt="entradas"/>
				</header>
				<strong>R$3000,00</strong>
			</div>
		</Container>
	)
}