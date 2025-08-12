'use client';

import { BarChart } from '@tremor/react';
import { MonthlyPerformance } from '@/types';

type NetNewMoneyData = {
  month: string;
  nnm_value: number;
}[];

const dataFormatter = (number: number) => {
  const value = number / 1_000_000;
  return `R$ ${Intl.NumberFormat('pt-BR').format(value)} M`;
};

export function NetNewMoneyChart({ data }: { data: MonthlyPerformance[] }) {
  // Convert Decimal values to numbers for the chart
  const formattedData = data.map(item => ({
    ...item,
    nnm_value: item.nnm_value.toNumber(),
  }));

  return (
    <BarChart
      className="mt-6"
      data={formattedData}
      index="month"
      categories={['nnm_value']}
      colors={['blue']}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  );
}