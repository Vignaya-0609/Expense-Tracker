import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

function AddTransaction() {
    const [text, setText] = useState("");
    const [amt, setAmt] = useState(0); 
    const { addTransaction } = useContext(GlobalContext);

    function validateText() {
        if (text === "" || text.trim() === "") {
            alert("Enter Text");
            return false;
        }
        return true;
    }

    function validateAmt() {
        if (amt === 0 || isNaN(amt) ||amt==="") {
            alert("Enter a valid Amount (non-zero)");
            return false;
        }
        return true;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateText() && validateAmt()) {
            const newTransaction = {
                id: Math.floor(Math.random() * 10000000000),
                text,
                amount: Number(amt)
            }
            addTransaction(newTransaction);
            setText("");
            setAmt(0);
        } else {
            console.error("Transaction not added");
        }
    }

    return (
        <div className='transaction'>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                    <input type="number" id="amount" placeholder="Enter amount..." value={amt} onChange={(e) => setAmt(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
