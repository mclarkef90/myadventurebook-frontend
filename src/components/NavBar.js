import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return(
    <>
    <NavLink
      to="/users"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Users
    </NavLink>

    <NavLink
      to="/users/new"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Create User Profile
    </NavLink>

    <h1>Welcome to MyAdventureBook!</h1>
    <h3> An App to Dedicated to Sharing Activity Ideas </h3>
    </>
  )
}

export default NavBar;

// <NavLink
//   to="/adventures"
//   exact
//   style={link}
//   activeStyle={{
//     background: 'darkblue'
//   }}
//   >Adventures
// </NavLink>
