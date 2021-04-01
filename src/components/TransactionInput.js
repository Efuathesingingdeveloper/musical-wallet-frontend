import React from 'react'
import {connect} from 'react-redux'
import { addTransaction } from '../actions/addTransaction'



class TransactionInput extends React.Component {

    state = {
    kind:'deposit',
    amount:'',
    description: '',
    category: ''



    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value



    })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTransaction(this.state, this.props.account.id)
        debugger
        this.setState({ 
    kind:'deposit',
    amount:'',
    description: '',
    category: ''

})
    }

    render() {
        return(
       <div>

            <form onSubmit={this.handleSubmit}>
                <label>Transaction Type:</label>
                <select name= "kind" value={this.state.kind} onChange={this.handleChange}>
                    <option>deposit</option>
                    <option>withdraw</option>
                </select><br/><br/>

                <label>Transaction Category:</label>
                <select name= "category" value={this.state.category} onChange={this.handleChange}>
                    <option>Transportation</option>
                    <option>Buying Supplies</option>
                    <option>Event Cost</option>
                    <option>Fees</option>
                    <option>Paying Employees</option>
                    <option>Studio Time</option>
                    <option>other</option>


                    </select><br/><br/>

                <label>Transaction Amount:</label>
                 <input type="text" name="amount" value={this.state.amount}  onChange={this.handleChange}/>
                 <br/><br/>
                <label>Transaction description:</label>
                 <input type="text" name="description" value={this.state.description}  onChange={this.handleChange}/>
                 <br/><br/>
                <input type="submit"/>
            
            </form>
       </div>


        )
    }
}

export default connect(null, {addTransaction}) (TransactionInput)