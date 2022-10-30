import React, { useState } from 'react';
import { uniqueId } from '../utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';



function TransactionForm({ onNewTransaction }) {
    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');

    const addTransaction = (type, evt) => {
        evt.preventDefault();

        const data = {
            id: uniqueId(), name: nameValue,
            amount: parseInt(amountValue), type: type
        };

        onNewTransaction(data);

        setNameValue('');
        setAmountValue('');
        toast.success('successfully added', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }


    return (
        <div>
            <h2 className='trans-history'>Add New Transactions</h2>
            <form className='transaction-form'>
                <label>
                    Name
                    <div>
                        <input type="text" value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)} />
                    </div>
                </label>
                <label>
                    Amount
                    <div>
                        <input type="number" value={amountValue}
                            onChange={(e) => setAmountValue(e.target.value)} />
                    </div>
                </label>
                <div>
                    <button className='income-btn' onClick={(e) => addTransaction('income', e)} >Add Income</button>
                    <button className='expense-btn' onClick={(e) => addTransaction('expense', e)}>Add Expense</button>
                
                </div>
                
            </form>
            <ToastContainer/>
        </div>
        
    )
}

export default TransactionForm;