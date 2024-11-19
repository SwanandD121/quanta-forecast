import axios from "axios";
import prisma from "./prisma";

export async function fetchAndCacheData(stockId: string, metricType: string) {
  const cachedData = await prisma.financialData.findMany({
    where: { stockId, metricType },
    orderBy: { year: "asc" },
  });

  if (cachedData.length > 0) {
    return cachedData;
  }

  const apiUrl = "https://indian-stock-exchange-api2.p.rapidapi.com/stock_forecasts";
  const options = {
    method: "GET",
    url: apiUrl,
    params: { stock_id: stockId, measure_code: metricType },
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_IND_STOCK_API_KEY,
      "x-rapidapi-host": "indian-stock-exchange-api2.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  const apiData = response.data.periods;

  const dataToCache = apiData.map((period: any) => ({
    stockId,
    year: period.FiscalPeriod.Year,
    metricType,
    reported: period.Actuals?.Actual?.[0]?.Reported ? BigInt(period.Actuals.Actual[0].Reported) : null,
    estimated: period.Estimates?.Estimate?.[0]?.Mean ? BigInt(period.Estimates.Estimate[0].Mean) : null,
    high: period.Estimates?.Estimate?.[0]?.High ? BigInt(period.Estimates.Estimate[0].High) : null,
    low: period.Estimates?.Estimate?.[0]?.Low ? BigInt(period.Estimates.Estimate[0].Low) : null,
    median: period.Estimates?.Estimate?.[0]?.Median ? BigInt(period.Estimates.Estimate[0].Median) : null,
    currencyCode: period.Actuals?.Actual?.[0]?.CurrencyCode || null,
    reportedDate: period.Actuals?.Actual?.[0]?.ReportedDate ? new Date(period.Actuals.Actual[0].ReportedDate) : null,
  }));

  await prisma.financialData.createMany({ data: dataToCache });

  return dataToCache;
}