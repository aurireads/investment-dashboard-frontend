'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatCurrency } from '@/lib/utils';
import { TopAdvisorMetric } from '@/types';

export function TopAdvisorsTable({ data }: { data: TopAdvisorMetric[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Posição</TableHead>
          <TableHead>Assessor</TableHead>
          <TableHead>Receita Gerada</TableHead>
          <TableHead>% do Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((advisor, index) => (
          <TableRow key={advisor.advisor_id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{advisor.advisor_name}</TableCell>
            <TableCell>{formatCurrency(advisor.revenue)}</TableCell>
            <TableCell>{advisor.revenue_percentage.toFixed(2)}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}