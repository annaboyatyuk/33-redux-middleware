import React from 'react';

import ExpenseItem from '../expense-item/expenseItem';

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.expenseItem && this.props.expenseItem.name || '',
      price: this.props.expenseItem && this.props.expenseItem.price || '',
      categoryID: this.props.categoryItemID,
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.props.expenseItem) {
      this.props.onComplete( {
        ...this.state,
        id: this.props.expenseItem.id,
        timestamp: this.props.expenseItem.timestamp,
        editing: false,
        categoryID: this.props.expenseItem.categoryID,
      })
    }
    else {
      this.props.onComplete(this.state);
      this.setState({...this.defaultState});
    }
  }

  
  render() {
    return (
      <React.Fragment>

      <h5>add expense</h5>

      <form onSubmit={this.handleSubmit}>
        
        <label>expense</label>
        <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>

        <label>amount</label>
        <input type="number" name='price' value={this.state.price} onChange={this.handleChange}/>
      
        <input className='submitButton' type="submit" value={this.props.buttonText}/>
      </form>

      <ExpenseItem categoryItemID={this.props.categoryItemID} destroy={this.props.destroy}/>

      </React.Fragment>
    );
  }

}