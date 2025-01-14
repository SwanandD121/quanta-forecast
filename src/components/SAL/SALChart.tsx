"use client"

// import { Line } from "lucide-react"
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"

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
  year: number
  reportedSAL: number
  estimatedSAL: number
}

interface SALChartProps {
  data: ChartData[]
  stockId: string
}

const chartConfig = {
  reportedSAL: {
    label: "Reported SAL",
    color: "hsl(var(--chart-1))",
  },
  estimatedSAL: {
    label: "Estimated SAL",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const SALChart: React.FC<SALChartProps> = ({ data, stockId }) => {
  // const [stockId, setStockId] = useState();
  return (
    <Card className="mx-96 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div>
            Forecast Metic:{" "}
            <span className="font-bold text-xl bg-gradient-to-b from-lime-600 to-green-600 dark:from-lime-400 dark:to-green-400 bg-clip-text text-transparent">
              SAL
            </span>{" "}
            &#40;Revenue&#41;
          </div>
          <div>
            <span className="font-bold text-xl bg-gradient-to-b from-violet-300 to-purple-600 bg-clip-text text-transparent">
              {stockId.toUpperCase()}
            </span>
          </div>
        </CardTitle>
        <CardDescription>
          Reported vs Estimated SAL over the years
        </CardDescription>
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
              dataKey="reportedSAL"
              type="monotone"
              stroke="var(--color-reportedSAL)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-reportedSAL)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
            <Line
              dataKey="estimatedSAL"
              type="monotone"
              stroke="var(--color-estimatedSAL)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-estimatedSAL)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default SALChart
