import accountReducer from "../reducers/accountReducer"


export function fetchAccounts(){
 return (dispatch) => {
    fetch('http://localhost:3000/api/v1/accounts')
    .then(resp => resp.json())
    .then(accounts => dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: accounts 
    }))
    .then(response => response.json())
    .then(account => dispatch({type: 'ADD_ACCOUNT', payload:account}))
    }
}

