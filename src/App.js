import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const styles ={
  mainStyle: {
    background:'#536162',
    
  }
}
function App() {
  const [page, setPage] = useState('About Me');

  return (
    <div>
      <Header setPage={setPage}/>
      <main style={styles.mainStyle} >
        <Main page={page}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
