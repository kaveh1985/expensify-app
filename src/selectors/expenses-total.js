const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 456
  }];


const selectExpensesTotal =  (expenses) => {
        if(expenses.length === 0) {
            return 0;
        } else {
            return expenses.reduce((accumularor, actualValue) => {
                    return accumularor += actualValue.amount;
            },0);
        }
}

 export default selectExpensesTotal;