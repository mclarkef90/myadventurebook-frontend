import React from 'react'
import { connect } from 'react-redux';
import { createUser } from '../actions/createUser'

class NewUserForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      name: "",
      password: "",
      password_confirmation: "",
      email: "",
      city: "",
      state: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.createUser(this.state)

    this.setState({
      name: "",
      email: "",
      city: "",
      state: ""
    });
    this.props.history.push('/users')
  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <h2>Create User Profile</h2>
        <label>Username:</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Email:</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>City:</label>
        <input type="text" name="city" value={this.state.city} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>State:</label>
        <input type="text" name="state" value={this.state.state} onChange={this.handleOnChange}/>
        <br/><br/>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {createUser})(NewUserForm)
