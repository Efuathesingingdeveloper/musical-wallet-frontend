import React from 'react'
import {Redirect} from 'react-router-dom'
// import Searchbar from './Searchbar'
import AccountEdit from './AccountEdit'

import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {
    let account = props.accounts[props.match.params.id - 1]
    // let account = props.accounts.filter(account => account.id == props.match.params.id)[0]
    return (
        <div>
            {/* <Searchbar/> */}
           <h2>{account ? account.name : null} - {account ? account.balance : null}</h2>
           <TransactionsContainer account={account}/>
           <AccountEdit account = {account}/>
           </div>

    )
}
export default Account