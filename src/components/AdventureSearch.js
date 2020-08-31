import React from 'react'
import {connect} from 'react-redux'
import { addLike } from '../actions/addLike';
import NewComment from './NewComment'


class AdventureSearch extends React.Component{

  constructor(props){
    super(props)

    this.state={
      searchTerm: ""
    }
  }

  searchChangeHandler = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  likeHandler = (event) => {
    event.persist()
    let id= parseInt(event.target.dataset.id)
    let likes= parseInt(event.target.dataset.likes)
    let updatedLikes= likes + 1
    this.props.addLike(id, updatedLikes)
  }

  render(){
    let results= this.props.adventures.filter((adventure) => adventure.description.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1)

    return(
      <div>
      <br/>
      <input type="text" value={this.state.searchTerm} placeholder="Search Adventures" name="searchTerm" onChange={this.searchChangeHandler}/>
      <br/>


      {results.map(adventure =>
        <ul key={adventure.id}>
        <img className="image_thumbnail" alt="adventure" src={adventure.image_url}/>
        <h1>{adventure.title}</h1>
        <p>{adventure.description}</p>
        <a href={adventure.website_url}>Learn More</a>
        <p>Like: <button data-id= {adventure.id} data-likes={adventure.likes} onClick={this.likeHandler}>{adventure.likes}</button> </p>
        <NewComment history={this.props.history} user={this.props.user} adventure={adventure}/>

        <h3>User Comments: </h3>


        {adventure.comments.map(comment =>
          <ul key= {comment.id}>
          <p>{comment.text}</p>
          </ul>) }

        </ul>)}

      </div>
    )}
}

function mapStateToProps(state){
  return{
    adventures: state.adventures,
    users: state.users
  }
}

export default connect(mapStateToProps, {addLike})(AdventureSearch)
