import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'
import Account from '../components/Account'

class  AccountsContainer extends React.Component{

componentDidMount() {
    this.props.fetchAccounts()
}


render() {
    return (
        <div>
            <Switch>
            {/* <AccountInput/><br/><br/> */}
            <Route path='/accounts/new' component={AccountInput}/>
            <Route path= '/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
            <Route path= '/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>}/>
            </Switch>
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