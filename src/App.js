import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
  
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import { createContext, useState } from 'react';

export const categoryContext=createContext();//parent t theke jekono child ah value access korte pareh

function App() {
  const [category,setCategory]=useState('laptop');
  return (
    <div className="App">
      <div>
       <categoryContext.Provider value={[category,setCategory]}>
        <Home></Home>
        <Friends></Friends>
       </categoryContext.Provider>
      </div>
      <Router>
           <Switch>

           <Route path="/home">
            <Home/>

          </Route>
          <Route exact path="/">
            <Home/>

          </Route>
          <Route path="/friend/:friendId">
            <FriendDetails/>

          </Route>
          <Route path="*">
            <NoMatch/>

          </Route>


            </Switch> 
          
       
      </Router>
      
      
    </div>
  );
}

export default App;
