import React from 'react';
import '../styles/Main.css';

import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';

function Main({page}){

    if(page ==='About Me'){
        return (
            <div>
                <AboutMe />
            </div>
        
        );
    }
    else if(page === 'Portfolio'){
        return(
            <div>
                <Portfolio />
            </div>
            
        );
    }
    else if(page==='Contact'){
        return(
            <div>
                <Contact />
            </div>
            
        );
    }
    else{
        return (
            <div>
                <Resume/>
            </div>
            
        );
    }
    
}
export default Main;