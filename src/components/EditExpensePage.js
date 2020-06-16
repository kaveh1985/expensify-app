import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // the value of onSubmit function is passed through calling this function in the ExpenseForm
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          // we call onSubmit func in the ExpesneForm and passed an object to it
          // -- and return it here in the func above
          onSubmit={this.onSubmit} 
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }

}



const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};


const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (date) => dispatch(removeExpense(date))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)