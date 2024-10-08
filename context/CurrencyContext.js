'use client';

import React, { useState, useEffect, createContext } from 'react';

const initialValues = {
    meta: { last_updated_at: '2024-08-08T23:59:59Z' },
    data: [
        { code: "ADA", value: 2.8438623969 },
        { code: "AED", value: 3.6719504131 },
        { code: "AFN", value: 70.7796687498 },
        { code: "ALL", value: 91.3319208599 },
        { code: "AMD", value: 386.54608175 },
        { code: "ANG", value: 1.7860903561 },
        { code: "AOA", value: 873.5557637485 },
        { code: "ARB", value: 1.8057069932 },
        { code: "ARS", value: 935.8640836443 },
        { code: "AUD", value: 1.5169102822 },
        { code: "AVAX", value: 0.0439977075 },
        { code: "AWG", value: 1.79 },
        { code: "AZN", value: 1.7 },
        { code: "BAM", value: 1.7908603415 },
        { code: "BBD", value: 2 },
        { code: "BDT", value: 117.9355142716 },
        { code: "BGN", value: 1.7816001843 },
        { code: "BHD", value: 0.376 },
        { code: "BIF", value: 2881.7690589675 },
        { code: "BMD", value: 1 },
        { code: "BNB", value: 0.001925538 },
        { code: "BND", value: 1.325120225 },
        { code: "BOB", value: 6.9095907222 },
        { code: "BRL", value: 5.5459507403 },
        { code: "BSD", value: 1 },
        { code: "BTC", value: 0.0000161787 },
        { code: "BTN", value: 83.9573709915 },
        { code: "BWP", value: 13.4905424758 },
        { code: "BYN", value: 3.2701915853 },
        { code: "BYR", value: 32701.906585576 },
        { code: "BZD", value: 2 },
        { code: "CAD", value: 1.3733902531 },
        { code: "CDF", value: 2683.4619878234 },
        { code: "CHF", value: 0.8669001157 },
        { code: "CLF", value: 0.0244800027 },
        { code: "CLP", value: 935.0953566267 },
        { code: "CNY", value: 7.1711214167 },
        { code: "COP", value: 4054.582192588 },
        { code: "CRC", value: 528.7378116597 },
        { code: "CUC", value: 1 },
        { code: "CUP", value: 24 },
        { code: "CVE", value: 101.01665761 },
        { code: "CZK", value: 23.1147928274 },
        { code: "DAI", value: 0.9996676815 },
        { code: "DJF", value: 177.721 },
        { code: "DKK", value: 6.8348612551 },
        { code: "DOP", value: 59.6608196033 },
        { code: "DOT", value: 0.2050163458 },
        { code: "DZD", value: 134.8653756712 },
        { code: "EGP", value: 49.2379157443 },
        { code: "ERN", value: 15 },
        { code: "ETB", value: 98.6225354219 },
        { code: "ETH", value: 0.0003726888 },
        { code: "EUR", value: 0.9159801374 },
        { code: "FJD", value: 2.2690103974 },
        { code: "FKP", value: 0.7844753184 },
        { code: "GBP", value: 0.7844401336 },
        { code: "GEL", value: 2.6939304229 },
        { code: "GGP", value: 0.7844757488 },
        { code: "GHS", value: 15.4788618191 },
        { code: "GIP", value: 0.7844753976 },
        { code: "GMD", value: 58.1069108487 },
        { code: "GNF", value: 8604.7122819123 },
        { code: "GTQ", value: 7.7346910983 },
        { code: "GYD", value: 208.8093128749 },
        { code: "HKD", value: 7.7928912649 },
        { code: "HNL", value: 24.7456434036 },
        { code: "HRK", value: 6.6406907026 },
        { code: "HTG", value: 133.8769668194 },
        { code: "HUF", value: 362.3656301982 },
        { code: "IDR", value: 15868.419393433 },
        { code: "ILS", value: 3.7684906271 },
        { code: "IMP", value: 0.7844750234 },
        { code: "INR", value: 83.9479527878 },
        { code: "IQD", value: 1307.7606424863 },
        { code: "IRR", value: 41989.118513154 },
        { code: "ISK", value: 138.3859547467 },
        { code: "JEP", value: 0.7844754673 },
        { code: "JMD", value: 156.4995200973 },
        { code: "JOD", value: 0.71 },
        { code: "JPY", value: 147.6204168745 },
        { code: "KES", value: 129.4167257397 },
        { code: "KGS", value: 84.7253391075 },
        { code: "KHR", value: 4093.0357237317 },
        { code: "KMF", value: 451.4532313136 },
        { code: "KPW", value: 900.0088137324 },
        { code: "KRW", value: 1371.5830091588 },
        { code: "KWD", value: 0.305990043 },
        { code: "KYD", value: 0.83333 },
        { code: "KZT", value: 476.1200768973 },
        { code: "LAK", value: 22166.635222029 },
        { code: "LBP", value: 89537.110360707 },
        { code: "LKR", value: 299.0398948323 },
        { code: "LRD", value: 195.4989012445 },
        { code: "LSL", value: 18.359812382 },
        { code: "LTC", value: 0.0163361609 },
        { code: "LTL", value: 3.1631602188 },
        { code: "LVL", value: 0.6438452508 },
        { code: "LYD", value: 4.8000605668 },
        { code: "MAD", value: 9.8214615064 },
        { code: "MATIC", value: 2.3156643917 },
        { code: "MDL", value: 17.5334817731 },
        { code: "MGA", value: 4577.4764108064 },
        { code: "MKD", value: 56.2866071182 },
        { code: "MMK", value: 2094.2276628577 },
        { code: "MNT", value: 3398.6774512838 },
        { code: "MOP", value: 7.983671473 },
        { code: "MRO", value: 356.999828 },
        { code: "MRU", value: 39.2102118387 },
        { code: "MUR", value: 46.2695075528 },
        { code: "MVR", value: 15.4461520684 },
        { code: "MWK", value: 1732.9522987031 },
        { code: "MXN", value: 18.8545637439 },
        { code: "MYR", value: 4.4730008853 },
        { code: "MZN", value: 63.5435711653 },
        { code: "NAD", value: 18.3011325692 },
        { code: "NGN", value: 1591.2112922113 },
        { code: "NIO", value: 36.7828676565 },
        { code: "NOK", value: 10.8385719771 },
        { code: "NPR", value: 133.5765281007 },
        { code: "NZD", value: 1.6645802382 },
        { code: "OMR", value: 0.3839700699 },
        { code: "OP", value: 0.7041881114 },
        { code: "PAB", value: 0.9990401371 },
        { code: "PEN", value: 3.7265903884 },
        { code: "PGK", value: 3.8671905457 },
        { code: "PHP", value: 57.3785595696 },
        { code: "PKR", value: 278.6043752591 },
        { code: "PLN", value: 3.9536706341 },
        { code: "PYG", value: 7592.9613166096 },
        { code: "QAR", value: 3.6381204537 },
        { code: "RON", value: 4.5583108659 },
        { code: "RSD", value: 106.8152575461 },
        { code: "RUB", value: 86.6793795661 },
        { code: "RWF", value: 1316.9387219238 },
        { code: "SAR", value: 3.749640376 },
        { code: "SBD", value: 8.342907542 },
        { code: "SCR", value: 14.8610427135 },
        { code: "SDG", value: 601.5 },
        { code: "SEK", value: 10.5091811039 },
        { code: "SGD", value: 1.3257301726 },
        { code: "SHP", value: 0.7844400934 },
        { code: "SLL", value: 22428.404357577 },
        { code: "SOL", value: 0.0061456965 },
        { code: "SOS", value: 570.9811621188 },
        { code: "SRD", value: 28.8497736586 },
        { code: "STD", value: 22609.666550725 },
        { code: "STN", value: 22.6096692368 },
        { code: "SVC", value: 8.75 },
        { code: "SYP", value: 13024.300629682 },
        { code: "SZL", value: 18.3229433891 },
        { code: "THB", value: 35.2736562165 },
        { code: "TJS", value: 10.5368712806 },
        { code: "TMT", value: 3.5 },
        { code: "TND", value: 3.076860388 },
        { code: "TOP", value: 2.3514904471 },
        { code: "TRY", value: 33.5255250464 },
        { code: "TTD", value: 6.7819212405 },
        { code: "TWD", value: 32.4442551604 },
        { code: "TZS", value: 2701.3630696822 },
        { code: "UAH", value: 41.1000253863 },
        { code: "UGX", value: 3727.5320216419 },
        { code: "USD", value: 1 },
        { code: "USDC", value: 0.999933529 },
        { code: "USDT", value: 0.9997092298 },
        { code: "UYU", value: 40.429727592 },
        { code: "UZS", value: 12683.502573907 },
        { code: "VEF", value: 3663740.8529643 },
        { code: "VES", value: 36.6374134001 },
        { code: "VND", value: 25122.965340524 },
        { code: "VUV", value: 120.151996585 },
        { code: "WST", value: 2.7582115677 },
        { code: "XAF", value: 600.878661546 },
        { code: "XAG", value: 0.0363116796 },
        { code: "XAU", value: 0.0004124163 },
        { code: "XCD", value: 2.7 },
        { code: "XDR", value: 0.7460200775 },
        { code: "XOF", value: 600.8786549102 },
        { code: "XPD", value: 0.0010803416 },
        { code: "XPF", value: 109.2297763281 },
        { code: "XPT", value: 0.0010646516 },
        { code: "XRP", value: 1.6203698971 },
        { code: "YER", value: 249.7792107537 },
        { code: "ZAR", value: 18.3560422209 },
        { code: "ZMK", value: 9001.2 },
        { code: "ZMW", value: 26.1348131354 },
        { code: "ZWL", value: 34401.235000657 }
    ]
};
// https://api.currencyapi.com/v3/latest?apikey=cur_live_ptkcPMZALB3cybz09t5FH6xT4oXzNQBPSeNZxys1&currencies=EUR%2CUSD%2CCAD
export const CurrencyContext = createContext(initialValues);

export const CurrencyContextProvider = ({ children }) => {
    const [currencies, setCurrencies] = useState(initialValues);
    const [currencyList, setCurrencyList] = useState([])

    const deleteCurrency = (id) => {
        setCurrencyList(prev => prev.filter(currency => currency.id !== id))
        console.log(currencyList)
    }
    //   useEffect(() => {
    //     const fetchData = async () => {
    //       try {

    //         const response = await fetch(`http://api.currencyapi.com/v3/latest?apikey=${process.env.NEXT_PUBLIC_CURRENCYAPI}`);
    //         const data = await response.json();
    //         setCurrencies(data)

    //       } catch (error) {
    //         console.error('Failed to fetch user data:', error);
    //       }
    //     };
    //      fetchData();
    //   },
    // []);


    const contextValue = { currencies, setCurrencies, currencyList, setCurrencyList , deleteCurrency};

    return (
        <CurrencyContext.Provider value={contextValue}>
            {children}
        </CurrencyContext.Provider>
    );
};

export default CurrencyContextProvider;
