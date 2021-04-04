import React from 'react'
import {Route, Link} from 'react-router-dom'
import '../stylesheets/accounts.css';
import Account from './Account'




const Accounts = (props) => {

return (
    <div>


<section class="demo">

   

    <dl class="list maki">
        <dt>Artists Accounts</dt>
        {props.accounts.map(account => 
        
        <dd key={account.id}>

            {/* <Link to={'/accounts/new'} component={AccountInput}</Link> */}

            <Link to={`/accounts/${account.id}`}>{account.name}</Link>
            </dd>)}

        
        
    </dl>

    

    <a href="/accounts/new" class="toggle">New Accounts</a>
 


</section>

<div class="warning">
    <div class="message">
        <h1>CSS 3D Not Detected :(</h1>
        <p>I couldn't detect your browser's CSS 3D capabilities. If I'm wrong, please <a href="https://github.com/soulwire/Makisu/issues" target="_blank">file an issue</a>, otherwise, try a <a href="www.google.com/chrome" target="_blank">sexier browser</a></p>
    </div>
</div>




    </div>
    
    
  

   
)


}

export default Accounts