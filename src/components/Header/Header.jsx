import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to={'/'}>Tranding</Link>
      <Link to={'/random'}>Random</Link>
    </div>
  )
}

export default Header