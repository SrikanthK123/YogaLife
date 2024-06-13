import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Test from './components/Test';
import SingleFitnessInfo from './components/SingleFitnessInfo';
import {
  BrowserRouter as Router,
  
  Route,
  Routes
} from "react-router-dom";
import { ListOfFitness } from './components/Data';
import IndividualInfo from './components/IndividualInfo';


function App() {
  

  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      {
        ListOfFitness.map((item,index)=>(
          <Route
          path={`/${item.Title}`}
          element={
            <IndividualInfo
              Title={item.Title}
              HistoryInfo={item.HistoryInfo}
              Time={item.Time}
              DaysReq={item.DaysReq}
              Gallery1={item.Gallery1} 
              Gallery2={item.Gallery1} 
              Gallery3={item.Gallery3}
              Gallery4={item.Gallery4}
              Gallery5={item.Gallery5}
              Gallery6={item.Gallery6}
              Gallery7={item.Gallery7}
              Gallery8={item.Gallery8}
              Gallery9={item.Gallery9}
              InspirePerson = {item.InspirePerson}
              Solgan = {item.Solgan}
              PersonName = {item.PersonName}
              Words = {item.Words}
            />
          }
        />
        
        ))
      }
    </Routes>
   </Router>
   {/*<Test/>*/}
 { /*<SingleFitnessInfo/>*/}
   </>
  );
}

export default App;
