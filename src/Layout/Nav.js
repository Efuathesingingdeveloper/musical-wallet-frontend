import React, { Component } from 'react'  
import { Link } from 'react-router-dom'

export class Nav extends Component {  
    render() {  
        return (  
            <div>  
        <Link to='/accounts/new'>NEW ACCOUNT</Link><br/>       
            <Link to='/accounts'>YOUR ACCOUNTS</Link>
         
        </div>  
     
        )  
    }  
}  

export default Nav 