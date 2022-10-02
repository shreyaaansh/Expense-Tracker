import React, {useState}  from 'react';

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'College Fees',
        amount: 97000,
        date: new Date(2022, 8, 10)
    },
    {
        id: 'e2',
        title: 'Hostel Fees',
        amount: 80000,
        date: new Date(2022, 19, 10)
    },
    {
        id: 'e3',
        title: 'Stationary',
        amount: 2000,
        date: new Date(2022, 10, 7)
    },
    {
        id: 'e4',
        title: 'Clothings',
        amount: 3000,
        date: new Date(2022, 8, 10)
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    

    const addExpenseHandler = (expense) => {

        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    }


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}


export default App;