import React from 'react';
import Home from "./Home";
import Profile from "./components/Profile";
import Route from "./components/Route";

const App = () => {
  return(
    <div>
        <Route path="/"><Home/></Route>
        <Route path="/profile">
        <Profile/>
        </Route>
        </div>
  );
}
export default App;