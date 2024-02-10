import React, { useEffect, useState } from 'react'
import axios from "axios";
import './CurrConv.css'
import bgimg from '../images/background-currconv.png'
function CurrConv() {
    const[ammount,setAmmount]=useState()
    const[fromAmmount,setFromAmmount]=useState('USD')
    const[toAmmount,setToAmmount]=useState('INR')
    const[convertedAmmount,setConvertedAmmount]=useState(null)
    const[exchangeRate,setExchangeRate]=useState(null)

    useEffect(()=>{
        const getExchangeRate=async()=>{
            try{
                let url = `https://api.exchangerate-api.com/v4/latest/${fromAmmount}`
                const res=await axios.get(url)
                setExchangeRate(res.data.rates[toAmmount])
                
                
            }
            catch(e){
                console.error('error while fetching the data',e)
            }
        }
        getExchangeRate()
    },[fromAmmount,toAmmount])
    useEffect(()=>{
        setConvertedAmmount((ammount * exchangeRate).toFixed(2))
    },[ammount,exchangeRate])

    const handleAmmountChange=(e)=>{
        const value=parseFloat(e.target.value)
        setAmmount(isNaN(value) ? 0 : value)
    }
    const handleFromAmmountChange=(e)=>{
        setFromAmmount(e.target.value)
    }
    const handleToAmmountChange=(e)=>{
        setToAmmount(e.target.value)
    }
    

  return (
    <div>
    <div className="currencyCoverter">
        <div className="box">
            <img src={bgimg} alt="" />
        </div>
        <div className="data">
            <h1>Currency Converter</h1>
            <div className="inputContainer">
                <label htmlFor="amt">Ammount : </label>
                <input type="number" id='amt' value={ammount} placelder="enter the ammount" onChange={handleAmmountChange} />
            </div>
                
            <div className="inputContainer">
                <label htmlFor="fromCurrency"> From Currency : </label>
                <select name="fromCurrency" id="fromCurrency" value={fromAmmount} onChange={handleFromAmmountChange}>
                    <option value="USD">USD - United States Doller</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound Sterling</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="AUD">AUS - Australian Dollar</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="BRL">BRL - Brazilian Real</option>
                    <option value="ZAR">ZAR - South African Rand</option>
                </select>
            </div>
            <div className="inputContainer">
                <label htmlFor="toCurrency"> To Currency : </label>
                <select name="toCurrency" id="toCurrency" value={toAmmount} onChange={handleToAmmountChange}>
                    <option value="USD">USD - United States Doller</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound Sterling</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="AUD">AUS - Australian Dollar</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="BRL">BRL - Brazilian Real</option>
                    <option value="ZAR">ZAR - South African Rand</option>
                </select>
            </div>
            <div className="result">
                <p><span>{ammount}</span> <span className="coun">{fromAmmount}</span> value is equals to  <span>{convertedAmmount}</span> <span className="coun">{toAmmount}</span></p>
            </div>
        </div>
        <p className="copyright">CopyRights &#169; All Rights Reserved by <span><a href="https://wizards-personal-portfolio.netlify.app/" className='copyright-name'>Akash</a></span></p>
     
        </div>
</div>

  )
}

export default CurrConv
