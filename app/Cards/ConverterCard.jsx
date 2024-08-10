'use client'
import { CurrencyContext } from '@/context/CurrencyContext';
import React, { useContext, useEffect, useState } from 'react'
import CurrencyAPI from '@everapi/currencyapi-js';
const currencyApi = new CurrencyAPI(process.env.NEXT_PUBLIC_CURRENCYAPI);

const Card = () => {
  const { currencies, currencyList, setCurrencyList } = useContext(CurrencyContext);

  const [data, setData] = useState({
    amount: 0,
    convertedAmount: 0,
    conversion: 0,
    countyBaseName: "",
    countyConversionName: ""
  });
  const [value, setValue] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(data);
  };

  const handleConversion = () => {
    // Implement your conversion logic here
    setData(prev => ({
      ...prev,
      convertedAmount: data.conversion * parseFloat(data.amount)
    }))


  };
  const handleSave = () => {

    setCurrencyList((prev) => [
      ...prev,
       data 
    ]);


  };

  useEffect(() => {
    currencyApi.latest({
      base_currency: data.countyBaseName,
      currencies: data.countyConversionName
    }).then(response => {
      console.log(response.data[data.countyConversionName]?.value);
      setData(prev => ({
        ...prev,
        conversion: response.data[data.countyConversionName]?.value
      }));

    });
  }, [data.countyConversionName, data.convertedAmount]);

  return (
    <div>
      <input type="text" name="amount" onChange={handleChange} />
      <select id="base" name="countyBaseName" onChange={handleChange}>
        {currencies.data.map(currency => (
          <option key={currency.code} value={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
      <hr />
      <input type="text" name="conversion" value={data.convertedAmount} onChange={handleChange} />
      <select id="currencies" name="countyConversionName" onChange={handleChange}>
        {currencies.data.map(currency => (
          <option key={currency.code} value={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
      <br />
      <label>Conversion Rate: {data.conversion}</label>

      <hr />
      <button onClick={handleConversion}>Calculate</button>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default Card