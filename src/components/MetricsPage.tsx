"use client"
import StockSearch from "@/components/StockSearch";
import React, { useState } from "react";
import FinancialPrediction from "./FinancialPredicition";

const MetricsPage = () => {
  const [stockId, setStockId] = useState("");

  const handleSearch = (searchId: string) => {
    setStockId(searchId);
  };

  return (
    <div>
      <StockSearch onSearch={handleSearch} />
      {stockId && (
        <div>
          <FinancialPrediction stockId={stockId} metricType="SAL" />
          <FinancialPrediction stockId={stockId} metricType="EPS" />
          <FinancialPrediction stockId={stockId} metricType="ROE" />
        </div>
      )}
    </div>
  );
};

export default MetricsPage;
