import Transactions from "../components/Transactions"
import accountReducer from "../reducers/accountReducer"


export function fetchTransactions(accountId, categoryName){
 return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/transactions`)
    .then(resp => resp.json())
    // . then (transac => console.log(transac))
    .then(transactions => dispatch({
        type: 'FETCH_TRANSACTIONS',
        payload: (transactions, categoryName)
    }))
    
    }
}

