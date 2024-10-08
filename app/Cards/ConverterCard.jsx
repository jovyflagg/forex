"use client";
import { CurrencyContext } from "@/context/CurrencyContext";
import React, { useContext, useEffect, useState } from "react";
import CurrencyAPI from "@everapi/currencyapi-js";
const currencyApi = new CurrencyAPI(process.env.NEXT_PUBLIC_CURRENCYAPI);
import "./ConverterCard.css";
import { Button, TextField } from "@mui/material";
import { nanoid } from "nanoid";
const Card = () => {
  const { currencies, currencyList, setCurrencyList } =
    useContext(CurrencyContext);

  const [data, setData] = useState({
    amount: 0,
    convertedAmount: 0,
    conversion: 0,
    countyBaseName: "",
    countyConversionName: "",
  });
  const [value, setValue] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(data);
  };

  const handleConversion = () => {
    // Implement your conversion logic here
    setData((prev) => ({
      ...prev,
      convertedAmount: data.conversion * parseFloat(data.amount),
    }));
  };
  const handleSave = () => {
    const newData = { ...data, _id: nanoid() };
    setCurrencyList((prev) => [...prev, newData]);
  };

  useEffect(() => {
    currencyApi
      .latest({
        base_currency: data.countyBaseName,
        currencies: data.countyConversionName,
      })
      .then((response) => {
        // console.log(response.data[data?.countyConversionName]?.value);
        setData((prev) => ({
          ...prev,
          conversion: response.data[data?.countyConversionName]?.value,
        }));
      });
  }, [data.countyConversionName, data.convertedAmount]);

  return (
    <div className="card-converter">
      <p className="saved-section-header"> Currency:</p>

      <div className="input-select">
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          name="amount"
          onChange={handleChange}
        />

        <select id="base" name="countyBaseName" onChange={handleChange}>
          {currencies.data.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code}
            </option>
          ))}
        </select>
      </div>

      <div className="input-select"></div>

      <div className="input-select">
        <TextField
          id="outlined-basic"
          variant="outlined"
          name="conversion"
          onChange={handleChange}
          value={data.convertedAmount}
        />

        <select
          id="currencies"
          name="countyConversionName"
          onChange={handleChange}
        >
          {currencies.data.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code}
            </option>
          ))}
        </select>
      </div>

      <br />

      <hr />
      <div className="conversion-rate-wrapper">
        <label className="label-text">Conversion Rate: </label>
        <p className="label-text">{data.conversion}</p>
      </div>


      <div className="btn-group">
        <Button variant="contained" onClick={handleConversion}>
          Calculate
        </Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Card;
