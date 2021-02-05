import React from 'react'
import { Link } from "react-router-dom";
import { StyledNavbar } from './Navbar.style';
import './Navbar.style.css'


export default function Navbar() {
    return (
        <StyledNavbar>
           <Link className={'navbar'} to="/"> HOME </Link> 
        </StyledNavbar>
    )
}
