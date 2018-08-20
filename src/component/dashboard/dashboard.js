import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/categoryForm';
import CategoryItem from '../category-item/categoryItem';

import './dashboard.css';

import {categoryCreate, categoryUpdate, categoryDestroy, categoryReset} from '../../action/categoryActions';


class Dashboard extends Component {

  render() {
    return (
      <Fragment>

        <h3>BUDGET</h3>
        <p>enter a category name and budget</p>


        <CategoryForm onComplete={this.props.categoryCreate} buttonText='SUBMIT'/>

        <CategoryItem onComplete={this.props.categoryUpdate} destroy={this.props.categoryDestroy}/>

      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  category: state.categoryState,
  expense: state.expenseState,
});

const mapDispatchToProps = dispatch => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDestroy: category => dispatch(categoryDestroy(category)),
  categoryReset: category => dispatch(categoryReset(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

