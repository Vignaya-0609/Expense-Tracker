import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState';

function Balance() {
  const {transactions}=useContext(GlobalContext);
  const amounts=transactions.map(transaction=>transaction.amount);
  const tot=amounts.reduce((acc,item)=>acc+=item,0).toFixed(2);
  return (
    <div className='balance-section'>
        <h3>Your Balance</h3>
        <h1>&#8377; {tot}</h1>
    </div>
  )
}

export default Balance