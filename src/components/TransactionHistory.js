import React from 'react';
import '../App.css';


function TransactionHistory({ transactions, onDeleteTransaction }) {
    return (
        <div>
            <h2 className='trans-history'>Transaction History</h2>
            <ul className='transactions' >
                {
                    transactions.map((data) => 
                        <li 
                         key={data.id}>
                            <div>
                                <span className='trans-span'>-- {data.name}  --  MAD {data.amount}</span>
                                <button className='button-delete' onClick={() => onDeleteTransaction(data.id)}> delete x</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TransactionHistory;