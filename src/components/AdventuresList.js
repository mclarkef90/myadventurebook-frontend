import React from 'react';
import {Link} from 'react-router-dom';


function AdventuresList(props) {

    return(
      <div>
        <h2> Adventures </h2>
          {props.userAdventures.map(adventure =>
            <ul key={adventure.id}>
              <Link to={`/users/${adventure.user_id}/adventures/${adventure.id}`}>{adventure.title}</Link> <br/>
            </ul>)}
      </div>
      )
    }

export default (AdventuresList)
