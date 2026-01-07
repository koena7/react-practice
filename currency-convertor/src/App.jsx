import { useState } from 'react'
import './App.css'
import CurrencyBox from './components/currencyBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr');
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = currencyInfo ? Object.keys(currencyInfo) : []; 

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
    temp = amount;
    setAmount(convertedAmount);
    setConvertedAmount(temp);
  }

  return (
    <>
      <div className="h-screen flex flex-col bg-blue-300 justify-center items-center">
        <p className="text-2xl mb-2">Currency Convertor</p>
        <div className="w-1/2 bg-white/30 p-5 rounded-xl shadow-lg text-center">
          <CurrencyBox 
            label="From"
            amount={amount}
            selectedCurrency={from}
            currencyOptions={currencyOptions}
            onAmountChange={(amount) => setAmount(amount)}
            onSelectedCurrencyChange={(selected) => setFrom(selected)}
          />
          <button 
            className="w-15 h-15 bg-blue-500 text-white py-2 -mb-4 -mt-4 rounded-full mx-auto hover:bg-blue-600 transition"
            onClick = {() => swap()}
          >
            Swap
          </button>
          <CurrencyBox 
            label="To"
            amount={convertedAmount}
            selectedCurrency={to}
            currencyOptions={currencyOptions}
            onSelectedCurrencyChange={(selected) => setTo(selected)}
            amountDisabled
          />
          <button 
            className="w-full bg-green-500 text-white py-2  rounded-lg mt-4 hover:bg-green-600 transition"
            onClick={() => convert()}
          >
            Convert
          </button> 
        </div>
      </div>
    </>
  )
}

export default App
