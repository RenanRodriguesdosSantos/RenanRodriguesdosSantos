import React from 'react';
import projects from './projects.json';
import Project from './project';

const Projects = () => {
    return(
        <div id="projetos">
            <h1 className="titulo">Projetos</h1>
            <div className="container">
                {
                    projects.map((element,index) => 
                        <Project project={element} key={index}/>
                    )
                }
            </div>
        </div>
    )
    
}

export default Projects;