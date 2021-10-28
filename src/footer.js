import React from 'react';

const Footer = () => {
    return (
        <footer className="row" id="contato">
            <div className="col-md-10 text-center">
                <h3>Contato</h3>
                <a href="https://github.com/RenanRodriguesdosSantos"><img className="icon" alt="" src="images/icons/github.png"/></a>
                <a href="https://github.com/RenanRodriguesdosSantos"><img className="icon" alt="" src="images/icons/linkedin.png"/></a>
                <a href="https://github.com/RenanRodriguesdosSantos"><img className="icon" alt="" src="images/icons/email.png"/></a>
            </div>
            <div className="col-md-10 text-center">
                Desenvolvido por Renan Rodrigues &copy; 2021
            </div>
        </footer>
    );
}

export default Footer;