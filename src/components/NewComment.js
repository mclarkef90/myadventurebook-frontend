import React from 'react'
import { createComment } from '../actions/createComment'
import { connect } from 'react-redux';

class NewComment extends React.Component {

  constructor(props){
    super(props);
    console.log(props)
    let id= this.props.id
    console.log(id)
    this.state={
      text: "",
      adventure_id: props.adventure.id,
      user_id: props.user.id

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
    let adventure=this.state.adventure_id
    let user= this.state.user_id
    this.props.createComment(this.state)
    this.setState({
      text: "",
      adventure_id: "",
      user_id: ""
    })
    this.props.history.push(`/users/${user}/adventures/search`)
  }

  render() {
    console.log(this.props)

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <h2>Add Comment</h2>
        <label>Comment:</label>
        <input type="text" name="text" value={this.state.text} onChange={this.handleOnChange}/>
        <br/><br/>

        <input data-id={this.state.id} type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

// const mapStateToProps = state => {
//   return {
//   users: state.users
//   }
// }

export default connect(null, {createComment})(NewComment)
