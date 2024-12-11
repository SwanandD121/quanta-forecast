// // src/app/api/financial-data/[stockId]/route.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { fetchAndCacheData } from "@/lib/fetchAndCacheData";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { stockId, metricType } = req.query;

//   if (!stockId || !metricType) {
//     return res.status(400).json({ error: "Missing stockId or metricType" });
//   }

//   try {
//     const data = await fetchAndCacheData(stockId as string, metricType as string);
//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// }

import { NextApiRequest, NextApiResponse } from "next";
import { fetchAndCacheData } from "@/lib/fetchAndCacheData";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { stockId } = req.query;
    const metricType = req.query.metricType as string;

    if (!stockId || !metricType) {
      return res.status(400).json({ error: "Missing stockId or metricType" });
    }

    try {
      const data = await fetchAndCacheData(stockId as string, metricType);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
    console.log("Stock ID:", stockId);
    console.log("Metric Type:", metricType);
  } else {
    // If the request method is not GET, respond with 405
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

}
