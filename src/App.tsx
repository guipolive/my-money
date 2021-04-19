import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {createServer} from 'miragejs';
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";

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

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </>
  );
}
