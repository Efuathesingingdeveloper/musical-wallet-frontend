import React from 'react'
import accountReducer from '../reducers/accountReducer'


const AccountInfo = (props) => {

let account = props.accounts[props.match.params.id - 1]
return (
    <li>
{account ? account.name : null} - {account ? account.balance : null}

    </li>

)


}

export default AccountInfo 