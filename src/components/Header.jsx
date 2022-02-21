import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header className='header'>
        <div>
            <NavLink to='/' className={(navData) => navData.isActive ? "is-active" : "is-notActive"} >
                <h1 className='container'>Employee Dashboard</h1>
            </NavLink>
        </div>
        <div >
        <NavLink to='/create' className={(navData) => navData.isActive ? "is-active button" : "is-notActive button"} >Create</NavLink>
        <NavLink to='/help' className={(navData) => navData.isActive ? "is-active button" : "is-notActive button"} >Help Page</NavLink>
        </div>
    </header>
)

export default Header