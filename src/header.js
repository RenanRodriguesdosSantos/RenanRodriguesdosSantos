import React from 'react';
import './menu.css';

const Header = () => {
    return(
        <header className="menu">
           <nav>
                <input type="checkbox" id="bt_menu" />
                <label htmlFor="bt_menu">&#9776;</label>
                <label id="logo">Renan Rodrigues</label>
                <ul>
                    <li><a href="#sobre-mim">Sobre mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav> 
        </header>
        
    );
}

export default Header;