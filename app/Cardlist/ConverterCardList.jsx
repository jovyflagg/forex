import React, { useContext } from "react";
import './ConverterCardList.css';
import { CurrencyContext } from "@/context/CurrencyContext";

const ConverterCardList = ({ currencyList }) => {
    const { deleteCurrency } = useContext(CurrencyContext)
    const deleteCurr = (_id) => {
        deleteCurrency(_id)
    }
  return (
    <ul>
      <p className="saved-section-header">My Saved Conversions</p>

      {currencyList.map((currency) => (
        <>
          <li key={currencyList._id}>
            {currency.countyBaseName} {currency.countyConversionName}{" "}
            {currency.amount} {currency.convertedAmount} {currency.conversion}{" "}
            <button onClick={() => deleteCurr(currencyList._id)}>XRemove</button>
          </li>
          <hr />
        </>
      ))}
    </ul>
  );
};

export default ConverterCardList;
