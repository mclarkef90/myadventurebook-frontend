
export function editUser(id, {name, email, city, state}) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({name, email, city, state})
      }
    )
    .then(response => response.json())
    .then(user => dispatch({
      type: 'EDIT_USER',
      payload: user
    }))
  }
}
