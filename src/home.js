import React from 'react';
import Header from './header';

const Home = () =>{
    return(
        <div>
            <div className="row" id="home" style={{backgroundImage: `url("images/bgHome.jpg")` }}>
                    <Header/>
                    <div className="col-md-10">
                        <h1 className="text-center">Renan Rodrigues</h1>
                        <h2 className="text-center">{"{"} Desenvolvedor FullStack {"}"}</h2>
                    </div>
                </div>
        </div>
    );
}

export default Home;