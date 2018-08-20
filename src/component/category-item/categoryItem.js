import React from 'react';
import { connect } from 'react-redux';

import {expenseCreate, expenseDelete} from '../../action/expenseActions'

import CategoryForm from '../category-form/categoryForm';
import ExpenseForm from '../expense-form/expenseForm';


class CategoryItem extends React.Component {

  state = {
    editing: false,
  }

  handleDouble = (id) => {
    this.setState({ editing: true, id })
  }

  updateCategory = (category) => {
    this.setState({
      editing: false
    });
    this.props.onComplete(category);
  }


  render() {

      return (
        <React.Fragment>

          <ul>
            {this.props.category.map(categoryItem => (
              <li id={categoryItem.id} key={categoryItem.id}>

                <h2>{categoryItem.name}</h2>

                <p onDoubleClick={() => this.handleDouble(categoryItem.id)} >${categoryItem.budget}</p>

                <button onClick={() => this.props.destroy(categoryItem)}>X</button>

                {this.state.id === categoryItem.id ? <CategoryForm  buttonText='UPDATE' onComplete={this.updateCategory} categoryItem={categoryItem}/> : null}
                
                <ExpenseForm onComplete={this.props.expenseCreate} categoryItemID={categoryItem.id} destroy={this.props.expenseDelete} buttonText='SUBMIT'/>

              </li>
            ))}
          </ul>


        </React.Fragment>
      )
    }
  }


const mapStateToProps = state => ({
  category: state.categoryState,
});

const mapDispatchToProps = dispatch => ({
  expenseCreate: expense => dispatch(expenseCreate(expense)),
  expenseDelete: expense => dispatch(expenseDelete(expense))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryItem);
