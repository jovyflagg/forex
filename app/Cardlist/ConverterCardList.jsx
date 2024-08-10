import React from 'react'

const ConverterCardList = ({ currencyList }) => {

    return (
        <ul>
            ConverterCardList
            {currencyList.map(currency => (
                <>
                    <li key={currencyList.id}>
                        {currency.countyBaseName}{" "}
                        {currency.countyConversionName}{" "}
                        {currency.amount}{" "}
                        {currency.convertedAmount}{" "}
                        {currency.conversion}{" "}
                    </li>
                    <hr />
                </>
            ))}

        </ul>
    )
}

export default ConverterCardList