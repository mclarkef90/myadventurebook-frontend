import React from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import {deleteAdventure} from '../actions/deleteAdventure'
import EditAdventure from './EditAdventure'



class Adventure extends React.Component {

  constructor(props){
    super(props)
    console.log(this.props)
  }

  handleDelete =(event) => {
    let id= parseInt(event.target.dataset.id)
    let user= parseInt(event.target.dataset.user)
    this.props.boundDeleteAdventures(id)
    this.props.history.goForward(`users/${user}`)
  }

  render(){
    let id= this.props.match.params.id
    let aId= this.props.match.params.adventure_id
    let adventure= this.props.adventures.filter(adventure => adventure.id == aId)[0]
    console.log(adventure)
    console.log(id, aId)

    return(
      <div>
      {adventure ?
        <>

          <h2>{adventure.title} - By: {adventure.user.name} </h2>
          <img className="image_thumbnail" alt="activity" src= {adventure.image_url}/><br/>
          <button onClick={() => this.props.history.goBack()}>Close</button>{'  '}
          <button onClick={() => this.props.history.push(`/users/${adventure.user_id}/adventures/${adventure.id}/edit`)}> Edit Adventure </button> {'  '}
          <button data-user={adventure.user_id} data-id={adventure.id} onClick={this.handleDelete}> Delete Adventure </button> <br/><br/>
          <Switch>
          <Route path="/users/:id/adventures/:adventure_id/edit" render={(routerProps) => <EditAdventure {...routerProps} />} />
          </Switch>
          <p>Description: {adventure.description} </p>
          <a href={adventure.website_url}>Learn More</a><br/>
          <h3>Public Comments</h3>
          {adventure.comments.map(comment=> <ul key={comment.id}><p> {comment.text}</p> </ul>)}


        </>
        :
        null}
      </div>)}
}

  const mapStateToProps = state => {
    return {
    users: state.users,
    adventures: state.adventures
    }
  }

  function mapDispatchToProps(dispatch){
    return {boundDeleteAdventures: (id) => dispatch(deleteAdventure(id))
  }}

export default connect(mapStateToProps, mapDispatchToProps)(Adventure)
