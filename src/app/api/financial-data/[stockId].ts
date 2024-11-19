import { NextApiRequest, NextApiResponse } from "next";
import { fetchAndCacheData } from "@/lib/fetchAndCacheData";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { stockId, metricType } = req.query;

  if (!stockId || !metricType) {
    return res.status(400).json({ error: "Missing stockId or metricType" });
  }

  try {
    const data = await fetchAndCacheData(stockId as string, metricType as string);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}