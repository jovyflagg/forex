import React, { useContext } from "react";
import "./ConverterCardList.css";
import { CurrencyContext } from "@/context/CurrencyContext";
import { Button } from "@mui/material";
import { PiXCircle } from "react-icons/pi";

const ConverterCardList = ({ currencyList }) => {
  const { deleteCurrency } = useContext(CurrencyContext);
  const deleteCurr = (_id) => {
    deleteCurrency(_id);
  };
  return (
    <div className="saved-list-container">
      <ul>
        <p className="saved-section-header">My Saved Conversions</p>

        {currencyList.map((currency) => (
          <>
            <li key={currencyList._id}>
              <div className="saved-section-list">
                <PiXCircle
                  onClick={() => deleteCurr(currencyList._id)}
                  color="red"
                />
                {currency.countyBaseName} {currency.countyConversionName}{" "}
                {currency.amount} {currency.convertedAmount}{" "}
                {currency.conversion}{" "}
              </div>
            </li>
            <hr />
          </>
        ))}
      </ul>
    </div>
  );
};

export default ConverterCardList;
