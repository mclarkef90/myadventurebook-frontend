

export function createAdventure({title, description, website_url, image_url, user_id}) {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${user_id}/adventures`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({title, description, website_url, image_url, user_id})
      }
    )
    .then(response => response.json())
    .then(user => dispatch({
      type: 'CREATE_ADVENTURE',
      payload: user
    }))
    }
  }
