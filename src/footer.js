import React from 'react';

const Footer = () => {
    return (
        <footer className="row" id="contato">
            <div className="col-md-10 text-center">
                <h3 className="titulo">Contato</h3>
                <a href="https://github.com/RenanRodriguesdosSantos" target="_blank"><img className="icon" alt="" src="images/icons/github.png"/></a>
                <a href="https://www.linkedin.com/in/renan-rodrigues-164b5a1a1/" target="_blank"><img className="icon" alt="" src="images/icons/linkedin.png"/></a>
                <a href="mailto:renanrodriguesdossantos123@gmail.com" target="_blank"><img className="icon" alt="" src="images/icons/email.png"/></a>
            </div>
            <div className="col-md-10">
                <h2 className="text-center">Só os tolos sabem tudo, os sábios aprendem algo novo a cada dia!</h2>
                <h3 className="text-center">Autor</h3>
            </div>
            <div className="col-md-10 text-center">
                Desenvolvido por Renan Rodrigues &copy; 2021
            </div>
        </footer>
    );
}

export default Footer;