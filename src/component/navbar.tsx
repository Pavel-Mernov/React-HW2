import { useState } from "react"

interface NavBarProps {
    toggle : () => void;
}

const NavBar : React.FC<NavBarProps> = ( { toggle } ) => {

    return <nav className="navbar">
        <button onClick={toggle}>☰</button>
        <ul>
            <li><a href="">Товары</a></li>
            <li><a href="">Склады</a></li>
            <li><a href="">О системе</a></li>
            <li><a href="">Личный кабинет</a></li>
        </ul>
        
    </nav>
    
}

export default NavBar