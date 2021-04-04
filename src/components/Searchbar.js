import React from 'react'
import {connect} from 'react-redux'
import {fetchTransactions} from '../actions/fetchTransactions'

class SearchBar extends React.Component {



    state = {
        category:''
      }  


    handleClick = (event) => {
        event.preventDefault()
        this.props.fetchTransactions(window.location.pathname.split('').length - 10, event.target )
        // let search = {...this.state, id: this.props.account.id}

        console.log(window.location.pathname.split('').length - 10)
    }
render () {

    return (
        <div id= "search-bar">
            
            <button>Transportation</button>
            <br></br>
            <button onClick= {this.handleClick}> Buying Supplies</button> 
            <br></br>
            <button>Event Cost</button>
            <br></br>
            <button>Fees</button>
            <br></br>
            <button>Paying Employees</button>
            <br></br>
            <button>Studio Time</button>
            <br></br>
            <button>other</button>



        </div>

    )
}

}
const mapStateToProps = transactions => {
    console.log(transactions)

    return {
     transactions: transactions
    }
}
export default connect(mapStateToProps, {fetchTransactions})(SearchBar)



