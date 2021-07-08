import React from "react";
import './App.css';
import HomePage from "./HomePage";
import {BrowserRouter, Switch , Route } from "react-router-dom";
import CvPage from "./CvPage";
import Information from "./Information";
import Carrer from "./Carrer";

const App = () => {
  return(
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path= "/" component={HomePage}/>
        <Route exact path= "/cvpage" component={CvPage}/>
        <Route exact path= "/information" component={Information}/>
        <Route exact path= "/carrer" component={Carrer}/>
      <HomePage/>
      </Switch>
      </BrowserRouter>
    </>
  )

}

export default App;
