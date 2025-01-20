import {useState, useEffect} from 'react'


function useCurrency(currency){
    const [currencyData, setCurrencyData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(response=>response.json())
        .then(data=>setCurrencyData(data))

    },[currency])

    return currencyData
 
}

export default useCurrency;