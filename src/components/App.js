import React from 'react';
import PopUp from './PopUp';
import Candidates from './Candidates';
import FilterBy from './FilterBy';
import Filtered from './Filtered';

function App() {
  return (
    <div className="App">
      <h1>Recruitment App</h1> 
      <PopUp/>   
      <Candidates/> 
      <FilterBy/> 
      <Filtered/>
    </div>
  );
}


export default App;
