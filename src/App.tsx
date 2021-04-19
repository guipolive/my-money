import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {createServer} from 'miragejs';
import { useState } from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root'); // Por questões de acessibilidade, dizemos ao Modal qual é o elemento principal da aplicação. Com isso, o elemento principal diz ao usuário que está com acessibilidade ligada que essa parte principal da aplicação não está acessível, pois o modal está aberto.

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'teclado mecanico',
          amount: 400,
          type: 'withdraw',
          category: 'compras',
          createdAt: new Date()
        }
      ]
    });
  }
})

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}
	
	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

  return (
    <>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />

      <Modal
					isOpen={isNewTransactionModalOpen}
					onRequestClose={handleCloseNewTransactionModal}
				>
        <h2>cadastrar transação</h2>
      </Modal>

      <GlobalStyle/>
    </>
  );
}
