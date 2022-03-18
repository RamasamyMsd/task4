import React from 'react'
import NavElement from './NavElement'
import './Site.css'

function NavBar() {
  return (
   <>
    <div className="topbar">
            <div className="row">
                <div className="logo">Sixteen</div>
                <div className="nav">
                    <ul>
                       
                        <NavElement name="Home" href=""/>
                        <NavElement name="About" href=""/>
                        <NavElement name="Services" href=""/>
                        <NavElement name="Team" href=""/>
                        <NavElement name="Work" href=""/>
                        <NavElement name="Client" href=""/>
                        <NavElement name="Blog" href=""/>
                        <NavElement name="Contacts" href=""/>

                    </ul>
                </div>
            </div>
        </div>
   
   
   </>
  )
}

export default NavBar