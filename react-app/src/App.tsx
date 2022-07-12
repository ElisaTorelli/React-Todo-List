import React from 'react';
import LoginCard from './components/LoginCard/LoginCard';
import NavBar from './components/NavBar/NavBar';
import Provider from './components/Provider/Provider';
import ToDoCard from './components/ToDoCard/ToDoCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <LoginCard/> */}
      <Provider children={undefined} />
      <ToDoCard />
      <Provider children={undefined} />
    </div>
  );
}


export default App;