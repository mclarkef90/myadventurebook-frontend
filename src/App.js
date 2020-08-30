import React from 'react'
import {Route, Switch} from 'react-router-dom'

import NavBar from './components/NavBar'
import NewUserForm from './components/NewUserForm';
import UsersContainer from './containers/UsersContainer'
import AdventuresContainer from './containers/AdventuresContainer'


export default class App extends React.Component {

  render(){
    return(
      <div>

      <NavBar/>
      <AdventuresContainer />
      <Switch>
      <Route path='/users/new' component={NewUserForm} />
      <UsersContainer />
      </Switch>

      </div>
    )
  }
}
