import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

function TransactionList() {
    const {transactions,deleteTransaction}=useContext(GlobalContext);
  return (
    <div className='transaction'>
        <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction=>(
            <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
                {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}{Math.abs(transaction.amount)}&#8377;</span><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionList