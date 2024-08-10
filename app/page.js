'use client';
import { CurrencyContext } from "@/context/CurrencyContext";
import { useContext, useEffect, useState } from "react";
import Card from "./Cards/ConverterCard";
import ConverterCardList from "./Cardlist/ConverterCardList";


export default function Home() {
  const { currencyList, setCurrencyList} = useContext(CurrencyContext)
  return (
    <div>
      <Card />
      {currencyList.length > 0 ? <>
      
      <ConverterCardList currencyList={currencyList}/>
      </>: <>No converted amounts</>}
    </div>
  );
}
