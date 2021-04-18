import { Container } from "./styles";

export function TransactionsTable() {
	return(
		<Container>
			<table>
				<thead>
					<tr>
						<th>título</th>
						<th>valor</th>
						<th>categoria</th>
						<th>data</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>desenvolvimento de website</td>
						<td className="deposit" >R$12.000,00</td>
						<td>desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
					
					<tr>
						<td>desenvolvimento de website</td>
						<td className="deposit" >R$12.000,00</td>
						<td>desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
					
					<tr>
						<td>desenvolvimento de website</td>
						<td className="deposit" >R$12.000,00</td>
						<td>desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
					
					<tr>
						<td>desenvolvimento de website</td>
						<td className="deposit" >R$12.000,00</td>
						<td>desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
					
					<tr>
						<td>desenvolvimento de website</td>
						<td className="withdraw" >- R$12.000,00</td>
						<td>desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}