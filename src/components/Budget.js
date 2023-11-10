import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    let budgetUpperLimit = 20000;
    const { budget, expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        let totalExpense = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (event.target.value > budgetUpperLimit)
        {
            alert("The budget cannot exceed " + currency + "20000");
        }
        else if (event.target.value < totalExpense)
        {
            alert("The budget cannot reduce below the spending");
        }
        else 
        {
            setNewBudget(event.target.value);
        }
        
    }
    return (
    <div className='alert alert-secondary'>
    <span>Budget: {currency}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
    );
};
export default Budget;
