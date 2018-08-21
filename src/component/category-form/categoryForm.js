import React from 'react';


class CategoryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.categoryItem && this.props.categoryItem.name || '',
      budget: this.props.categoryItem && this.props.categoryItem.budget || '',
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.props.categoryItem) {
      this.props.onComplete( {
        ...this.state,
        id: this.props.categoryItem.id,
        timestamp: this.props.categoryItem.timestamp,
        editing: false
      })
    }
    else {
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState });
    }
  }

  
  render() {

    return (
      <React.Fragment>

      <form onSubmit={this.handleSubmit} >
        
        <label >NAME</label>

        <input required type="text" name='name' onChange={this.handleChange} value={this.state.name}/>

        <label >BUDGET</label>

        <input required type="number" min='1' name='budget' onChange={this.handleChange} value={this.state.budget}/>

        <input className='submitButton' type="submit"  value={this.props.buttonText}/>

      </form>
      </React.Fragment>
    );
  }
}


export default CategoryForm;
