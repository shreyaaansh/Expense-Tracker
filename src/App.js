import React  from 'react';


import Expenses from './components/Expenses/Expenses';

const App = () => {
    let expenses = [
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


    return (
        <div>
            <h2>Expenses Tracker</h2>
            <Expenses item={expenses}/>
        </div>
    );
}


export default App;