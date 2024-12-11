"use client"

import React, { useEffect, useState } from "react"
import SALChart from "./SAL/SALChart"

interface FinancialPredictionProps {
  stockId: string
  metricType: string
}

const FinancialPrediction: React.FC<FinancialPredictionProps> = ({
  stockId,
  metricType,
}) => {
  const [data, setData] = useState([])
  const [chartData, setChartData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/financial-data/${stockId}&metricType=${metricType}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setData(result);

        const transformedData = result.map((item: any) => ({
          year: item.year,
          reportedSAL: item.reported || 0,
          estimatedSAL: item.estimated || 0,
        }));
        setChartData(transformedData);
      } catch (err: any) {
        console.error(err.message);
        setError("Failed to load data");
      }
    };

    fetchData();
  }, [stockId, metricType]);


  return (
    <div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : data.length > 0 ? (
        <SALChart stockId={stockId} data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default FinancialPrediction
