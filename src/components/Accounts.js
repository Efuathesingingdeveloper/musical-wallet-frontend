import React from 'react'
import AccountInfo from './AccountInfo'




const Accounts = (props) => {

return (
    <div>
          <li> TEST</li> 
        {props.accounts.map(account => 
        <div key={account.id}><AccountInfo account={account}/></div> )}
    </div>
)


}

export default Accounts