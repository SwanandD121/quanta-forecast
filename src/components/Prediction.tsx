"use client"
import React, { useState } from 'react'
import EPSPrediction from './EPS/EPSPrediction'
import SALPrediction from './SAL/SALPrediction'
import ROEPrediction from './ROE/ROEPrediction'
import { Separator } from './ui/separator'
import StockSearch from './StockSearch'

function Prediction() {
    const [stockId, setStockId] = useState("tatasteel");

    const handleSearch = (id: string) => {
        setStockId(id);
    }
  return (
    <div>
        <StockSearch onSearch={handleSearch}/>
        <EPSPrediction stockId={stockId}/>
            <Separator className='mb-10'/>
        <SALPrediction stockId={stockId}/>
            <Separator className='mb-10'/>
        <ROEPrediction stockId={stockId}/>
    </div>
  )
}

export default Prediction