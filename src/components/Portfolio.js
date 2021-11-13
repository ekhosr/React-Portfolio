import React from 'react';
import Project from './Project';

import bookClubCollective from '../images/bookClubCollective.png';
import budgetTracker from '../images/budgetTracker.png';
import marvel from '../images/marvel.png';
import techBlog from '../images/techBlog.png';
import noteTaker from '../images/noteTaker.png';
import workoutTracker from '../images/workoutTracker.png';
const ProjectList =[
  {
    id:0,
    title:'Book Club Collective',
    // tech:'jQuery/HTML',
    img:bookClubCollective,
    url:'https://github.com/stevenslade/Book-Club-Collective'
  },
  {
    id:1,
    title: 'Budget Tracker',
    // tech:'PhaserJS',
    img:budgetTracker,
    url:'https://github.com/ekhosr/Budget-Tracker'
  },
  {
    id:2,
    title: 'Marvel Library',
    // tech:'NodeJS',
    img:marvel,
    url:'https://github.com/lukecp5/marvel-library'
  },
  {
    id:3,
    title:'Tech Blog',
    // tech:'jQuery',
    img:techBlog,
    url:'https://github.com/ekhosr/Tech-Blog'
  },
  {
    id:4,
    title:'Note Taker',
    // tech:'MongoDB',
    img:noteTaker,
    url:'https://github.com/ekhosr/Note-Taker'
  },
  {
    id:5,
    title:'Workout Tracker',
    // tech:'PWA/mongoose',
    img:workoutTracker,
    url: 'https://github.com/ekhosr/Workout-Tracker'
  },
]

const styles ={
  portfolioStyle:{
    display:'flex',
    flexWrap:'wrap'
  }
}
function Portfolio(){
    return (
        <div style={styles.portfolioStyle}>
          {
            ProjectList.map((project)=>(
              <Project key={project.id} title={project.title} description={project.tech} img={project.img} url={project.url}/>
            ))
          }
          
            
        </div>
        
    );
}
export default Portfolio
