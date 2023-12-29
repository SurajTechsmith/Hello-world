
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
                 <div className='section one'>
        <h1>HELLO</h1>
      </div>
      <div className='section second'>
        <h1>World</h1>
      </div> 
      <div className='section third'>
  
        <video  autoPlay muted loop>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4" />
        </video>
   
      </div>
  
    </div>
  );
}

export default App;
