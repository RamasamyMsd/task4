import React from 'react'

function NavElement(NavProps) {
  return (
    <li><a href={NavProps.href}>{NavProps.name}</a></li>
  )
}

export default NavElement