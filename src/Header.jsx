import React, { Component } from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header gradient">
        <h1 className="header-title">
            <Link className="text-black hover:text-grey no-underline" to='/'>My Portfolio</Link>
            <br></br>
            <br></br>
        </h1>
        <ul className="list-reset flex">
            <p className="mr-6"><NavLink className="font-extrabold text-3xl text-black hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></p>
        </ul>
        <br></br>
        <ul className="list-reset flex">
            <p className="mr-6"><NavLink className="font-extrabold text-3xl text-black hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>My Projects</NavLink></p>
        </ul>
        </nav>
    )   
}

export default Header