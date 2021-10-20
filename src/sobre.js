import React from 'react';

const Sobre = () => {
    return (
        <div className="row" id="sobre-mim">
            <div className="col-md-4"><img id="perfil" alt="perfil" src="images/perfil.jpg"/></div>
            <div className="col-md-6 text-center">
                <h1>Sobre Mim</h1>
                <div id="div-sbm">
                    Olá! Sou o <b>Renan Rodrigues</b>, Analista Programador de Sistema no final da formação pelo IFNMG-Campus Teófilo Otoni. 
                    <br/><br/>
                    Atualmente possuo conhecimento das seguintes tecnologias: PHP (Laravel), JavaScript (React), HTML,  CSS (Bootstrap) e Mysql.
                    <br/><br/>
                    Minhas principais características: <b>Dedicação, Proatividade, Determinação, Curiosidade e Ética.</b> 
                </div>
            </div>
        </div>
    );
}

export default Sobre;