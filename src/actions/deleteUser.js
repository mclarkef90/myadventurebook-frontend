
export default function deleteUser(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      })
    .then(response => response.json())
    .then(user => {
          dispatch({
      type: 'DELETE_USER',
      payload: id}, () => this.props.history.push(`/users/${id}`))
    })
  }
}
