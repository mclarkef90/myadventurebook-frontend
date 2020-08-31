import React from 'react';
import {connect} from 'react-redux';
import { fetchAdventures } from '../actions/fetchAdventures.js';
import { fetchUsers } from '../actions/fetchUsers.js';

import {Route, Switch} from 'react-router-dom';
import AdventureSearch from '../components/AdventureSearch'

class AdventuresContainer extends React.Component {

  componentDidMount(){
    this.props.fetchAdventures()
    this.props.fetchUsers()

  }

  render(){
    return(
      <div>
      <br/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  adventures: state.adventures,
  users: state.users
  }
}

export default connect(mapStateToProps, {fetchAdventures, fetchUsers})(AdventuresContainer)
