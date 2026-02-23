import '../App.css'
function ListTransactionsComponent({transactionsList}) {


    return <>
        {transactionsList.map(item => { 
            return (<div className="card">
                <p>item.description</p>
                <p>item.amount</p>
            </div>)
        })}
    
    
    
    </>



}


export default ListTransactionsComponent;