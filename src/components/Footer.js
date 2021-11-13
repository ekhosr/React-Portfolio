import React from 'react';

import LinkedinIcon from '../images/Linkedin.png';
import GithubIcon from '../images/GitHubIcon.png';
const styles ={
    footerStyles:{
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#536162'
    },
    imgStyles:{
        color:'black',
        padding:'0px',
        height:'40px',
    }
}
function Footer() {
    return (
      <footer style={styles.footerStyles}>
          <a href="https://www.linkedin.com/in/ehsan-ravi-07492ab2/" target="_blank" rel="noreferrer"><img style={styles.imgStyles} alt='Linkedin' src={LinkedinIcon}></img></a>
          <a href="https://github.com/ekhosr" target="_blank" rel="noreferrer"><img style={styles.imgStyles} alt='GitHub' src={GithubIcon}></img></a>
      </footer>
    );
  }
  
  export default Footer;