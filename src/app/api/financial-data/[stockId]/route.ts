import { NextResponse } from 'next/server';
import { fetchAndCacheData } from '@/lib/fetchAndCacheData';

export async function GET(req: Request, { params }: { params: { stockId: string } }) {
  const { stockId } = params;
  const { metricType } = req.url?.split('?')[1]?.split('&')?.reduce((acc: any, param) => {
    const [key, value] = param.split('=');
    acc[key] = value;
    return acc;
  }, {}) ?? {};

  // Validation check
  if (!stockId || !metricType) {
    return NextResponse.json({ error: "Missing stockId or metricType" }, { status: 400 });
  }

  try {
    const data = await fetchAndCacheData(stockId, metricType);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
