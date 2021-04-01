import  React from 'react';
import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountsContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';  
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

// 

  // function App() {
  //   return (
  //     <div className="App">
  //       {/* Header */}
  //       <Router>
  //           <Switch>
  //           <Route path="/sign">
  //                   <Header />
  //                   <Login /> 
  //               </Route>
  //             <Route path="/userProfile">
  //                 <Header backButton="/" />
  //                 <UserInfo />
  //               </Route>
  //               <Route path="/chat/:person">
  //                 <Header backButton="/chat" />
  //                 <MessageScreen />
  //               </Route>
  //               <Route path="/chat">
  //                 <Header backButton="/" />
  //                 <Messages />
  //               </Route>
  //               <Route path="/">
  //                   <Header />
  //                   <Cards />
  //                   <SwipeButtons />
  //               </Route>
                
  
  //           </Switch>
  //       </Router>
  
  //     </div>
        
  //   );
  // }
 




// export default App;
