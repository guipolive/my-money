import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {createServer} from 'miragejs';

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
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle/>
    </>
  );
}
