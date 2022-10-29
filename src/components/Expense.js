import '../App.css';
import PopCharts from './Graph';

import { currencyFormatter } from "../utils"

function Expense({ income, expense }) {
    return (
        <div>
            <h2 className='ur-balance'>Your Balance {currencyFormatter.format(income - expense)}</h2>
            <div className='graph'> <PopCharts/></div>
            <div className='card-expenses-income'>
                <div className='col-income'>
                    <span>
                        <h3 className='card-title'>Income</h3>
                        <div className='card-amount'>{currencyFormatter.format(income)}</div>
                    </span>
                </div>
                <div className='col-expense'>
                    <h3 className='card-title'>Expense</h3>
                    <div className='card-amount'>{currencyFormatter.format(expense)}</div>
                </div>
                
               
            </div>
        </div>
    )
}

export default Expense;