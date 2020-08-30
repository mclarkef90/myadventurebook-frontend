import React from 'react'
import { createComment } from '../actions/createComment'
import { connect } from 'react-redux';

class NewComment extends React.Component {

  constructor(props){
    super(props);
    console.log(props)
    let id= this.props.match.params.id
    console.log(id)
    this.state={
      text: "",
      id: `${id}`

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
    let id= parseInt(event.target.dataset.id)
    this.props.createComment(this.state)
    this.setState({
      text: ""
    })
    this.props.history.push(`/adventures/${id}`)
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
