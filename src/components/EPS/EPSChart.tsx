"use client"

// import { Line } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
// import { useState } from "react";

interface ChartData {
  year: number;
  reportedEPS: number;
  estimatedEPS: number;
}

interface EPSChartProps {
  data: ChartData[];
  stockId: string;
}

const chartConfig = {
  reportedEPS: {
    label: "Reported EPS",
    color: "hsl(var(--chart-1))",
  },
  estimatedEPS: {
    label: "Estimated EPS",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const EPSChart: React.FC<EPSChartProps> = ({ data, stockId }) => {
  // const [stockId, setStockId] = useState();
  return (
    <Card className="mx-96 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          
          <div>
            Forecast Metic: <span className="font-bold text-xl bg-gradient-to-b from-lime-600 to-green-600 dark:from-lime-400 dark:to-green-400 bg-clip-text text-transparent">EPS </span>&#40;Earnings per Share&#41;
          </div>
          <div>
            <span className="font-bold text-xl bg-gradient-to-b from-violet-300 to-purple-600 bg-clip-text text-transparent">{stockId.toUpperCase()}</span>
          </div>
        
        </CardTitle>
        <CardDescription>Reported vs Estimated EPS over the years</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="year" />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="reportedEPS"
              type="monotone"
              stroke="var(--color-reportedEPS)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-reportedEPS)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
            </Line>
            <Line
              dataKey="estimatedEPS"
              type="monotone"
              stroke="var(--color-estimatedEPS)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-estimatedEPS)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default EPSChart;