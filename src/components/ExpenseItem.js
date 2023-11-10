import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../App.css';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    const plusButtonStyle = {
        '--l': '30px',
        '--t': '3px',
        '--s': '5px',
        '--c2': 'green'
    }
    const minusButtonStyle = {
        '--l': '30px',
        '--t': '3px',
        '--s': '5px',
        '--c2': 'red'
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className="plus circle" style={plusButtonStyle} onClick={event=> increaseAllocation(props.name)}></button></td>
        <td><button className="minus circle" style={minusButtonStyle} onClick={event=> decreaseAllocation(props.name)}></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
