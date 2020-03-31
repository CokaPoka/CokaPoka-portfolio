import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';


function App() {
  const [user, setUser] = useState();
  
  return (
    <>
      <Navigation setUser={setUser} user={user}></Navigation>
     
    </>
  )
}
export default App;
