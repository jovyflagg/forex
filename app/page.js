'use client';
import { CurrencyContext } from "@/context/CurrencyContext";
import { useContext, useEffect, useState } from "react";
import Card from "./Cards/ConverterCard";
import ConverterCardList from "./Cardlist/ConverterCardList";
import Footer from "./Footer/Footer";
// import "./globals.css";
import Navbar from "./Navbar/Navbar";


export default function Home() {
  const { currencyList, setCurrencyList } = useContext(CurrencyContext)
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <p className="welcome-text">Enjoy our FREE Currency Converter</p>
        <Card />

      </div>
      <div className="saved-section">
        {currencyList.length > 0 ? <>

          <ConverterCardList currencyList={currencyList} />
        </> : <p className="saved-section-header">No conversions saved.</p>}
      </div>


      <Footer />
    </div>
  );
}
