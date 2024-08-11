import React from "react";
import './ConverterCardList.css';

const ConverterCardList = ({ currencyList }) => {
  return (
    <ul>
      <p className="saved-section-header">My Saved Conversions</p>

      {currencyList.map((currency) => (
        <>
          <li key={currencyList.id}>
            {currency.countyBaseName} {currency.countyConversionName}{" "}
            {currency.amount} {currency.convertedAmount} {currency.conversion}{" "}
          </li>
          <hr />
        </>
      ))}
    </ul>
  );
};

export default ConverterCardList;
