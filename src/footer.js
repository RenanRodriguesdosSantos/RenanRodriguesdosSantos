import React from 'react';

const Footer = () => {
    return (
        <footer className="row" id="contato">
            <div className="col-md-10 text-center">
                <h3>Contato</h3>
                <a href="https://github.com/RenanRodriguesdosSantos"><img className="icon" src="images/icons/github.png"/><span>GitHub</span></a>
                <a href="https://github.com/RenanRodriguesdosSantos"><img className="icon" src="images/icons/linkedin.png"/><span>Linkedin</span></a>
                <a href="https://github.com/RenanRodriguesdosSantos"><img className="icon" src="images/icons/email.png"/><span>E-mail</span></a>
            </div>
            <div className="col-md-10 text-center">
                Desenvolvido por Renan Rodrigues &copy; 2021
            </div>
        </footer>
    );
}

export default Footer;