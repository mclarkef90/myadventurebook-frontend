
export function editAdventure({title, description, website_url, image_url, id}) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/adventures/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({title, description, website_url, image_url})
      }
    )
    .then(response => response.json())
    .then(user => dispatch({
      type: 'EDIT_ADVENTURE',
      payload: user
    }))
  }
}
