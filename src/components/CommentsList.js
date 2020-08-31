import React from 'react';
import {Link} from 'react-router-dom';


export default function CommentsList(props){

  return(
    <div>
    <h2> My Comments </h2>
      {props.comments.map(comment =>
        <ul key={comment.id}> {comment.text} {' - '}
          <Link to={`/users/${comment.user_id}/comments/${comment.id}/edit`}>Edit Comment</Link>
        </ul>
      )}
    </div>
    )
  }
