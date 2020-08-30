
export function createComment({text, id}) {


  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/adventures/${id}/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({text})
      }
    )
    .then(response => response.json())
    .then(adventure => dispatch({
      type: 'CREATE_COMMENT',
      payload: adventure
    }))
    }
  }
