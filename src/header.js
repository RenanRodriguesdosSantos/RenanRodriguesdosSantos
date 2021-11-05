import React from 'react';
import './menu.css';

window.onload = () => {
    var menu = document.getElementById('menu'); 
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            menu.classList.add('menuFixo');
        }
        else {
            menu.classList.remove('menuFixo')
        };
    });
}

const Header = () => {
    return(
        <header className="menu" id="menu">
           <nav>
                <input type="checkbox" id="bt_menu" />
                <label htmlFor="bt_menu"><span>&#9776;</span><span>&#10799;</span></label>
                <label id="logo"></label>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav> 
        </header>
        
    );
}

export default Header;