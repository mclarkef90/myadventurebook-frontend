
export function fetchAdventures() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/adventures')
    .then(response => response.json())
    .then(adventures => dispatch({
      type: 'FETCH_ADVENTURES',
      payload: adventures
    }))
  }
}
