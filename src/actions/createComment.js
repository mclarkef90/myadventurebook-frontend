
export function createComment({text, user_id, adventure_id}) {


  return (dispatch) => {

    fetch(`http://localhost:3000/api/v1/adventures/${adventure_id}/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({text, user_id, adventure_id})
      }
    )
    .then(response => response.json())
    .then(adventure => dispatch({
      type: 'CREATE_COMMENT',
      payload: adventure
    }))
  }}
