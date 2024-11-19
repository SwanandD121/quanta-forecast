"use client";

import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartData {
  year: number;
  reported: number;
  estimated: number;
}

interface SALChartProps {
  data: ChartData[];
  stockId: string;
}

const chartConfig = {
  reported: {
    label: "Reported SAL",
    color: "hsl(var(--chart-1))",
  },
  estimated: {
    label: "Estimated SAL",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const SALChart: React.FC<SALChartProps> = ({ data, stockId }) => {
  return (
    <Card className="mx-96 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div>
            Forecast Metric:{" "}
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
        <CardDescription>Reported vs Estimated SAL over the years</CardDescription>
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
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <ChartTooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="reported"
              name="Reported SAL"
              type="monotone"
              stroke="var(--color-reported)"
              strokeWidth={2}
              dot={{ fill: "var(--color-reported)" }}
              activeDot={{ r: 6 }}
            >
              <LabelList
                dataKey="reported"
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
            <Line
              dataKey="estimated"
              name="Estimated SAL"
              type="monotone"
              stroke="var(--color-estimated)"
              strokeWidth={2}
              dot={{ fill: "var(--color-estimated)" }}
              activeDot={{ r: 6 }}
            >
              <LabelList
                dataKey="estimated"
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
  );
};

export default SALChart;
