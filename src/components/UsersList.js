import React from 'react';
import {connect} from 'react-redux'

class UsersList extends React.Component {

  constructor(props) {
    super(props)
    console.log(this.props)
  }

  showUser = (event) => {
    event.persist()
    console.log(event)
    let id= parseInt(event.target.dataset.id)
    this.props.history.push(`/users/${id}`)
  }

  render(){
    return(
      <div>
      {this.props.users.map(user =>
        <ul key={user.id}>
        <h1>{user.name}</h1>
        <button data-id={user.id} onClick={this.showUser}>Profile</button>
        </ul>
        )}
      </div>
      )
    }
}

const mapStateToProps = state => {
  return {
  users: state.users,
  adventures: state.adventures
  }
}

export default connect(mapStateToProps)(UsersList)
