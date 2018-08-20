import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form/expenseForm';
import {expenseUpdate} from '../../action/expenseActions';
import categoryItem from '../category-item/categoryItem';


class ExpenseItem extends React.Component {

  state = {
    editing: false,
  }


  handleDouble = (id) => {
    this.setState({editing: true, id})
  }

  updateExpense = (expense) => {
    this.setState({
      editing: false
    })
    this.props.expenseUpdate(expense);
  }


  render() {
    
    return(
      <React.Fragment>
        <ul>
          {this.props.expense.filter(expenseItem => expenseItem.categoryID === this.props.categoryItemID).map(expenseItem => (
            <li id={expenseItem.id} key={expenseItem.id}>

              <h4>{expenseItem.name}</h4>

              <p onDoubleClick={() => this.handleDouble(expenseItem.id)}>${expenseItem.price}</p>

              <button onClick={() => this.props.destroy(expenseItem)}>X</button>

              {this.state.id === expenseItem.id ? <ExpenseForm buttonText='UPDATE' onComplete={this.updateExpense} expenseItem={expenseItem}/> : null}

            </li>
          ))}
        </ul>

      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  expense: state.expenseState,
});

const mapDispatchToProps = dispatch => ({
  expenseUpdate: expense => dispatch(expenseUpdate(expense))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseItem);
