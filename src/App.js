import  React from 'react';
import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountsContainer'
class App extends React.Component {


  render() {
    return (
      <div className="App">
       < AccountsContainer/>
      </div>
    );
    }
  }
 


// const mapStateToProps = (state) => {
//   return {
//     accounts: state.accounts

//   }
// }



export default App;
