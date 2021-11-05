import React from 'react';

const Project = (props) =>{
    return (
        <div className="row project">
            <h1 className="col-md-10 text-center">{props.project.name}</h1>
            <div className="col-md-5">
                <img src={props.project.foto} alt="imagem do projeto" className="foto"></img>
            </div>
            <div className="col-md-5 text-center">
                <div className="row">
                    <div className="col-md-10 project-discription">
                        {props.project.discription}
                    </div>
                    <div className="col-md-10 tecnologias">
                        <h5>Tecnologias</h5>
                        <div className="row h-center">
                            {
                                props.project.tecnologies.map((element, index) =>
                                    <div className="col-md-1 div-icon" key={index}>
                                        <attr title={element.name}><img className="icon" src={element.icon} alt={element.name}/></attr>
                                    </div>
                                )
                            }
                        </div>
                    </div> 
                    <div className="col-md-10 div-link-gitHub">
                        <a className="link-gitHub" target="_blank" rel="noreferrer"  href={"https://github.com/RenanRodriguesdosSantos/" + props.project.repository}>Acessar o repositorio no GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;