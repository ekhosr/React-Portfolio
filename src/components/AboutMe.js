import React from 'react';

import profile from '../images/profilePhoto.jpg'
const styles ={
    AboutMeStyle: {
      paddingTop:'20px',
      color:'#000000',
      lineHeight: '2'
      
    },
    profilePhotoStyle:{
        width:'33.5vw'
    }
  }
  
function AboutMe(){
    return (
        <div>
            <img style={styles.profilePhotoStyle} alt="profile" src={profile}></img>
            <div style={styles.AboutMeStyle}>
            Hello! I'm Ehsan, a Full-Stack Web Developer with a background in IT and accounting. I enjoy solving problems by creating web applications. My primarily skills are HTML, CSS, and JavaScript and I'm also comfortable using back-end tech such as Node.js. I love to work as part of a dynamic team and learn from the programming challenges!  
            </div>
        </div>
        
    );
}
export default AboutMe;