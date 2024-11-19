"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SALChart from './SALChartOld'; 
import { Card, CardContent, CardHeader } from '../ui/card';

interface Period {
  RelativePeriod: {
    Type: string;
    Number: number;
  };
  FiscalPeriod: {
    Type: string;
    Year: number;
  };
  Actuals?: {
    Actual?: [
      {
        CurrencyCode: string;
        Reported: number;
        ReportedDate: string;
      }
    ];
  };
  Estimates?: {
    Estimate?: [
      {
        CurrencyCode: string;
        Mean: number;
        High: number;
        Low: number;
        Median: number;
      }
    ];
  };
}

interface SALPredictionProps{
    stockId: string;
}

const SALPrediction: React.FC<SALPredictionProps> = ({stockId}) => {
  const [data, setData] = useState<Period[] | null>(null);
  const [chartData, setChartData] = useState<{ year: number; reportedSAL: number; estimatedSAL: number }[]>([]);
//   const [stockId, setStockId] = useState('tatasteel'); // Default stock ID

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://indian-stock-exchange-api2.p.rapidapi.com/stock_forecasts',
        params: {
          stock_id: stockId,
          measure_code: 'SAL',
          period_type: 'Annual',
          data_type: 'Actuals',
          age: 'Current'
        },
        headers: {
          'x-rapidapi-key': process.env.NEXT_PUBLIC_IND_STOCK_API_KEY,
          'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
 }
      };

      try {
        const response = await axios.request(options);
        setData(response.data.periods);
        // Transform data for the chart
        const transformedData = response.data.periods.map((period: Period) => ({
          year: period.FiscalPeriod.Year,
          reportedSAL: period.Actuals?.Actual?.[0]?.Reported || 0, 
          estimatedSAL: period.Estimates?.Estimate?.[0]?.Mean || 0, 
        }));
        setChartData(transformedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [stockId]);

//   const handleSearch = (stockId: string) => {
    // setStockId(stockId);
//   };

  return (
    <div>
      <div>
        {/* <StockSearch onSearch={handleSearch} /> */}

      </div>
      {data ? (
        <>
          <SALChart stockId={stockId} data={chartData} />
          <div className='flex items-center justify-evenly flex-wrap my-10'>
            {data.map((period, index) => (
              <div key={index} className='w-64 h-64'>
                <Card className='shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <CardHeader>
                    <h3 className='text-2xl font-extrabold text-center bg-gradient-to-b from-zinc-500 to-slate-900 dark:from-zinc-200 dark:to-slate-400 bg-clip-text text-transparent'>{period.FiscalPeriod.Year}</h3>
                  </CardHeader>
                  <CardContent>
                    {period.Actuals?.Actual?.[0] && ( 
                      <div>
                        <p className=''>
                          Reported SAL: <span className='font-semibold'>{period.Actuals.Actual[0].Reported}</span> {period.Actuals.Actual[0].CurrencyCode}
                        </p>
                        <p className='dark:text-gray-400 text-gray-800'>Reported Date: {new Date(period.Actuals.Actual[0].ReportedDate).toLocaleDateString()}</p>
                      </div>
                    )}
                    {period.Estimates?.Estimate?.[0] && ( 
                      <div>
                        <p className=''>Estimate Mean SAL: <span className='font-semibold'>{period.Estimates.Estimate[0].Mean}</span></p>
                        <p>High: <span className='bg-green-600/50 px-2 rounded-md'>{period.Estimates.Estimate[0].High} INR</span></p>
                        <p>Low: <span className='bg-red-600/50 px-2 rounded-md'>{period.Estimates.Estimate[0].Low} INR</span></p>
                        <p>Median: <span className='font-semibold'>{period.Estimates.Estimate[0].Median}</span></p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
</div>
        </>
      ) : (
        <p>Unable to Fetch</p>
      )}
    </div>
  );
};

export default SALPrediction;