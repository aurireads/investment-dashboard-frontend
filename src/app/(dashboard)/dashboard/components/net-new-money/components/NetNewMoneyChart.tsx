'use client';

import { BarChart } from '@tremor/react';

type NetNewMoneyData = {
  month: string;
  nnm_value: number;
}[];

const dataFormatter = (number: number) => {
  const value = number / 1_000_000;
  return `R$ ${Intl.NumberFormat('pt-BR').format(value)} M`;
};

export function NetNewMoneyChart({ data }: { data: NetNewMoneyData }) {
  return (
    <BarChart
      className="mt-6"
      data={data}
      index="month"
      categories={['nnm_value']}
      colors={['blue']}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  );
}
