import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTransactionsComponent from './components/FormComponent'
import axiosRequester from './services/axiosRequester'
import { useEffect } from 'react'
import FormComponent from './components/FormComponent'

function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setTransaction] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(()=>{


  }, []); 


  return (


    <>
      <div>
        
      </div>
      
      <div className="card">
        <FormComponent setTransaction={setTransaction} setDescription={setDescription} ></FormComponent>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
