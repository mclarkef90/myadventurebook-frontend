import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'

import UsersList from '../components/UsersList';
import User from '../components/User';

import { fetchUsers } from '../actions/fetchUsers.js';
import { fetchAdventures } from '../actions/fetchAdventures.js';


class UserContainer extends React.Component {

  componentDidMount(){
    this.props.dispatchFetchUsers()
    this.props.dispatchFetchAdventures()
  }

  render(){
    return(
      <div>
      <br/>

      <Switch>

        <Route path='/users/:id' component={User} />
        <Route path='/users' component={UsersList} />


      </Switch>
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

function mapDispatchToProps(dispatch){
  return {
    dispatchFetchUsers: (users) => dispatch(fetchUsers(users)),
    dispatchFetchAdventures: (adventures) => dispatch(fetchAdventures(adventures))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
