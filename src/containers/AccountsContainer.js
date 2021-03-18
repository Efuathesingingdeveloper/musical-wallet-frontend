import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'
import AccountInfo from '../components/AccountInfo'

class  AccountsContainer extends React.Component{

componentDidMount() {
    this.props.fetchAccounts()
}


render() {
    return (
        <div>
            <Route path='/accounts/new' component={AccountInput}/>
            <AccountInput/><br/><br/>
            <Route path= '/accounts/:id' render={(routerProps) => <AccountInfo {...routerProps} accounts={this.props.accounts}/>}/>
            <Route exact path= '/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>}/>
        </div>
    )
}



}
const mapStateToProps = state => {
    return {
     accounts: state.accounts
    }
}
export default connect(mapStateToProps,{fetchAccounts})(AccountsContainer)