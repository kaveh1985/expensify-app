import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectexpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';



export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : "expenses";
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
       <h3>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h3>
        </div>
    )
}


const mapStateToProps = (state) => {
   const visibleExpenses = selectexpenses(state.expenses, state.filters);
    return {
      expenseCount: visibleExpenses.length,
      expensesTotal: selectExpensesTotal(visibleExpenses)
  };
}
  export default connect(mapStateToProps)(ExpensesSummary);