import React from 'react';

import resume from '../images/resume.pdf';


const styles ={
    buttonStyle: {
      fontSize:'18px',
      color: '#F3F4ED'
      
    },
    
}
function Resume(){
    return (
        <div>
            <button  style={styles.buttonStyle} > <a href={resume} target='_blank' rel="noreferrer">Download My Resume</a></button>

            <figure>
                <figcaption>Front-End Skills</figcaption>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>React.js</li>
                    <li>jQuery</li>

                </ul>
            </figure>
            <figure>
                <figcaption>Back-End Skills</figcaption>
                <ul>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>GraphQL</li>

                </ul>
            </figure>
        </div>
        
    );
}
export default Resume;