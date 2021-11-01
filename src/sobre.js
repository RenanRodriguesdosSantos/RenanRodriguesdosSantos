import React from 'react';

const Sobre = () => {
    return (
        <div  id="sobre">
            <h1 className="titulo">Sobre</h1>
            <div className="container">
                <div className="row" >
                    <div className="col-md-4">
                        <img id="perfil" alt="perfil" src="images/perfil.jpg"/>
                    </div>
                    <div className="col-md-6 text-center">
                        <div id="div-sbm">
                            Olá! Sou o <b>Renan Rodrigues</b>, Analista Programador de Sistema no final da formação pelo IFNMG-Campus Teófilo Otoni. 
                            <br/><br/><br/>
                            <div className="row">
                                <div className="col-md-4 ">
                                    <h3>Soft Skills</h3>
                                    <ul className="skills">
                                        <li>Adaptabilidade</li>
                                        <li>Proatividade</li>
                                        <li>Determinação</li>
                                        <li>Curiosidade</li>
                                        <li>Ética</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h3>Hard Skills</h3>
                                    <ul className="skills">
                                        <li>JavaScript (React)</li>
                                        <li>PHP (Laravel)</li>
                                        <li>MySql</li>
                                        <li>Padrão MVC</li>
                                        <li>HTML e CSS</li>
                                        <li>Git e GitHub</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;