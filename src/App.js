import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenseContainer from './components/Income-Expense-Container';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './contexts/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
          <Balance/>
          <IncomeExpenseContainer/>
          <TransactionList/>
          <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
