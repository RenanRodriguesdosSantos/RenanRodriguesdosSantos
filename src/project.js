import React from 'react';

const Project = (props) =>{
    return (
        <div className={props.index % 2 == 0?"row de-right-left bg-primary mt-1":"row de-left-right bg-primary mt-1"}>
            <h1 className="col-md-10 text-center pt-2">{props.project.name}</h1>
            <div className="col-md-5 p-3">
                <img src={props.project.foto} className="foto"></img>
            </div>
            <div className="col-md-5 font-4 text-center p-3">
                {props.project.discription}
                <h5>Tecnologias</h5>
                <div className="row h-center">
                    {
                        props.project.tecnologies.map((element, index) =>
                            <div className="col-md-1 div-icon" key={index}>
                                <img className="icon" src={element.icon} alt={element.name}/>
                                <span className="d-none">{element.name}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;