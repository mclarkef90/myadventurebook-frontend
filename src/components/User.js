import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import AdventuresList from './AdventuresList';
import CommentsList from './CommentsList';
import EditUser from './EditUser';
import deleteUser from '../actions/deleteUser'
import NewAdventure from './NewAdventure'
import EditAdventure from './EditAdventure'
import Adventure from './Adventure'
import EditComment from './EditComment'


class User extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  handleEdit =(event) => {
    event.persist()
    console.log(event)
    let id= parseInt(event.target.dataset.id)
    this.props.history.push(`/users/${id}/edit`)
    }

  handleDelete =(event) => {
    let id= event
    this.props.boundDeleteUser(id)
    this.props.history.push('/users')
    }

  addAdventure = (event) => {

    event.persist()
    console.log(event)
    let id= parseInt(event.target.dataset.id)
    this.props.history.push(`/users/${id}/adventures/new`)
    }

  render(){
    let user = this.props.users.filter(user => user.id == this.props.match.params.id)[0]
    return(
      <div>
      {user ?
        <>
          <h3>Profile</h3>
          <p>Name: {user.name} </p>
          <p>Email: {user.email}</p>
          <p>Location: {user.city}, {user.state} </p>

          <button data-id={user.id} onClick={this.handleEdit}>Edit User Profile</button>{"   "}

          <button onClick={(id) => this.handleDelete(user.id)} >Delete User Profile</button>{"   "}

          <button data-id={user.id} onClick={this.addAdventure}>Add Adventure</button>

          <Switch>
          <Route path="/users/:id/adventures/new" render= {(routerProps) => <NewAdventure {...routerProps} user={user}/> } />
          <Route path="/users/:id/adventures/:adventure_id/edit" render={(routerProps) => <EditAdventure {...routerProps} />} />
          <Route path="/users/:id/comments/:comment_id/edit" render={(routerProps) => <EditComment {...routerProps}/>} />
          <Route path="/users/:id/adventures/:adventure_id" render={(routerProps) => <Adventure {...routerProps} />}/>
          <Route path="/users/:id/edit" render={(routerProps) => <EditUser {...routerProps} user={user}/>}/>
          <Route path="/users/:id/comments" render={() => <CommentsList comments={user.comments} adventures={this.props.adventures}/>}/>
          </Switch>

          <AdventuresList userAdventures={user.adventures} user={user}/>
          <CommentsList comments={user.comments}/>


        </>
        :
        null}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  users: state.users,
  adventures: state.adventures,
  }
}

const mapDispatchToProps = dispatch => {
  return {boundDeleteUser: (id) => dispatch(deleteUser(id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
