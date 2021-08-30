import React from 'react'
import NavbarMobile from './NavbarMobile'


export default function Navbar() {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Talent Office App</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><box-icon name='menu' color='#fffafb' ></box-icon></a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
                </div>
            </nav>

            <NavbarMobile/>           
        </>
    )
}
