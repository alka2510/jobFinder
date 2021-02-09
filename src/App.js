import React from 'react';
import Home from "./Home";
import Profile from "./components/Profile";
import Route from "./components/Route";
import CompanyList from "./components/CompanyList";

const App = () => {
  return(
    <div>
        <Route path="/"><Home/></Route>
        <Route path="/profile">
        <Profile/>
        </Route>
        <Route path="/companies"><CompanyList/></Route>
        </div>
  );
}
export default App;