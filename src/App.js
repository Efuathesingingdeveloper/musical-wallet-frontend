import  React from 'react';
import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountsContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout  from './Layout/Layout'  
import { HashRouter, Route, Switch } from 'react-router-dom';  

function App() {  
  return (  
     <div className="App">  
    
      <AccountsContainer/>
      
      <Layout/>   
     </div>  
  );  
}  
  
export default App;  

