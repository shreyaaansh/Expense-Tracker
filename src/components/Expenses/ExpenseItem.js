import './ExpenseItem.css';

import React, {useState} from 'react';


import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';

const ExpenseItem = (props) =>{

    const [newTitle, setNewTitle] = useState("hy"); 

    const [title, setTitle] = useState(props.title); 

    const clickHandler = () => {
        setTitle('New Title...')
    }

    return (
        <Card className='expense-item'>   
            <ExpenseDate date = {props.date}/>

            <div className='expense-item__description'> 
                <h2>{ title }</h2>
                <div className='expense-item__price'>${ props.amount}</div>

            </div>

            <input type="text" value ={newTitle} />
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}


export default ExpenseItem;