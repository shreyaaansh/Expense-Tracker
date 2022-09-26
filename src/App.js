import ExpenseItem from './components/ExpenseItem';

function App(){
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
            <ExpenseItem
                date = {expenses[0].date}
                title = {expenses[0].title}
                amount = {expenses[0].amount}>
            </ExpenseItem>
            <ExpenseItem
                date = {expenses[1].date}
                title = {expenses[1].title}
                amount = {expenses[1].amount}>
            </ExpenseItem>
            <ExpenseItem
                date = {expenses[2].date}
                title = {expenses[2].title}
                amount = {expenses[2].amount}>
            </ExpenseItem>
            <ExpenseItem
                date = {expenses[3].date}
                title = {expenses[3].title}
                amount = {expenses[3].amount}>
            </ExpenseItem>
        </div>
    );
}


export default App;