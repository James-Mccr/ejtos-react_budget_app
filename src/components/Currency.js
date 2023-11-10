import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency,dispatch } = useContext(AppContext);
    const handleCurrency = (event) =>
    {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    };
    return (
    <div className='alert alert-secondary'>
    <span>Currency ({currency})</span>
    <select style={{backgroundColor: 'lightgreen'}} onChange={handleCurrency}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
    </select>
    </div>
    );
};
export default Currency;

