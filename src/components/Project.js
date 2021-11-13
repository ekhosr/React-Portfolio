import React from 'react';


import '../styles/Project.css';

function Project(props){
    return (
        <div className='project' onClick={()=>{window.open(props.url);console.log(props.url)}}>
            <img className='projectImg' alt ={props.title} src={props.img}></img>
            <div className='projectOverlay'>
                <h2>{props.title}</h2>
            </div>
            
        </div>
    );
}
export default Project;