import React,{ Component } from 'react';
import './App.scss';
import Navbar from './component/Navbar/Navbar'
import Tours from './component/TourList/Tours'

class App extends Component {
  render(){
  return (
    <div className="App">
     
      <Navbar/>
      <Tours/>

    </div>
  );

}
}

export default App;
