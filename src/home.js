import React from 'react';
import Project from './project';
import projects from'./projects.json';
import Sobre from './sobre';

const Home = () =>{
    return(
        <div className="container">
            <Sobre/>
            <div id="projetos">
                <h1 id="titulo-projeto" className="text-center">Projetos</h1>
                {
                    projects.map((element,index) => 
                        <Project project={element} index={index} key={index}/>
                    )
                }
            </div>
        </div>
    );
}

export default Home;