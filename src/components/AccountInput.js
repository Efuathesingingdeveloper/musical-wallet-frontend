import React from 'react'
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'
import '../stylesheets/ai.css'

class AccountInput extends React.Component {
 
  state = {
      name:'', 
      balance: '',
    }  

 handleChange = (event) =>{
    this.setState({
   [event.target.name]: event.target.value
})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAccount(this.state)
    this.setState({
        name:'', 
      balance: '' 
    })
  }

render(){
    return(
     <div>
       <div class="artist-form">
         <header class="welcome">
         <h1>Create an Account</h1>
         <h5>Thank you for choosing Artist Wallet</h5>
         </header>
         
       <form onSubmit={this.handleSubmit}>
         <div class="form-group">
          <label>Artist Account Name: </label> <br/><br/>
            <input type= 'text' class="form-control" placeholder='Name' value={this.state.name}  name="name" onChange={this.handleChange}/> 
         </div>
          <br/><br/>
          <div class="form-group">
            <label>Artist Account Balance: </label><br/><br/>
            <input type= 'text' class="form-control" placeholder='Balance' value={this.state.balance} name="balance"  onChange={this.handleChange}/> 
          </div>
         
          <br/><br/>
          < input type="submit" />
        </form>
        </div>
    </div>
    )
  }
}
export default connect(null, {addAccount})(AccountInput)

