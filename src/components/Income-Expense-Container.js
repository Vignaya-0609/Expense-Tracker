import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState';

function IncomeExpenseContainer() {
  const {transactions}=useContext(GlobalContext);
  const amounts=transactions.map(transaction=>transaction.amount);
  const income=amounts.reduce((acc,item)=>item > 0 ? acc + item : acc,0);
  const expense=amounts.reduce((acc,item)=>item < 0 ? acc + item : acc,0);
  return (
    <div className='inc-exp-container'>
        <div className='income'>
            <h4>Income</h4>
            <p className="money plus">+&#8377;{income}</p>
        </div>
        <div className='expense'>
            <h4>Expense</h4>
            <p className="money minus">-&#8377;{Math.abs(expense)}</p>
        </div>
    </div>
  )
}

export default IncomeExpenseContainer