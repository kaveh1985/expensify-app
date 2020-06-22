import React from 'react';
import { connect } from 'react-redux';




const ExpenseListHeader = (props) => {
    let result = 0;
    if(props.expenses.length > 0) {
          props.expenses.map((value) => {
           result += value.amount
        })   
    }
    return (
        <div>
           <h3>total amount is: {result ? result : 0} </h3>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      expenses: state.expenses
    }
  }

  export default connect(mapStateToProps)(ExpenseListHeader);