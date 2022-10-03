import React, {useState, useEffect}  from 'react';

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    function fetchData(){
        fetch('http://localhost/sample-api/api/read.php').then(  //need to be edited
        response => {
            return response.json();
            }
        ).then(
        data => {
            //console.log(data);
            setExpenses(data);
            }
        );
    }


    useEffect(()=>{
        fetchData();
    }, []);
    
    

    const addExpenseHandler = (expense) => {
        fetch('http://localhost/sample-api/api/read.php',{  //api key has to be changed
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                "content-Type" : 'application/json'
            }
        }).then(
            response => {
                fetchData();
            }
        );
    }


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}


export default App;