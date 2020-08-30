
export function editComment({text, id, adventure_id}) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/comments/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({text})
      }
    )
    .then(response => response.json())
    .then(adventure => dispatch({
      type: 'UPDATE_COMMENT',
      payload: adventure
    }))
  }
}
