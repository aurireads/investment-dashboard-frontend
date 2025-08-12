'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  fetchDashboardMetrics,
  fetchTopAdvisors,
  fetchMonthlyPerformance,
} from '@/lib/api';
import { DashboardMetrics, TopAdvisorMetric, MonthlyPerformance } from '@/types';
import { formatCurrency, formatPercentage } from '@/lib/utils';
import { NetNewMoneyChart } from './components/net-new-money/components/NetNewMoneyChart';
import { TopAdvisorsTable } from './components/net-new-money/components/TopAdvisorsTable';

export default function DashboardPage() {
  const { data: metrics, isLoading: isLoadingMetrics } = useQuery<DashboardMetrics>({
    queryKey: ['dashboardMetrics'],
    queryFn: fetchDashboardMetrics,
  });

  const { data: topAdvisors, isLoading: isLoadingAdvisors } = useQuery<TopAdvisorMetric[]>({
    queryKey: ['topAdvisors'],
    queryFn: fetchTopAdvisors,
  });

  const { data: monthlyPerformance, isLoading: isLoadingPerformance } = useQuery<MonthlyPerformance[]>({
    queryKey: ['monthlyPerformance'],
    queryFn: fetchMonthlyPerformance,
  });

  if (isLoadingMetrics || isLoadingAdvisors || isLoadingPerformance) {
    return <div>Loading...</div>;
  }

  // Handle case where data is null or undefined
  if (!metrics || !topAdvisors || !monthlyPerformance) {
    return <div>No data available.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Captado Anual Total */}
        <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
          <CardHeader>
            <CardTitle>Captado Anual Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{formatCurrency(metrics.total_revenue_january.toNumber())}</div>
            <p className="text-sm mt-2">{formatPercentage(metrics.total_revenue_change)} <span className="text-xs">vs. last year</span></p>
          </CardContent>
        </Card>
        
        {/* Card 2: Captado Semestral */}
        <Card className="bg-gradient-to-br from-red-500 to-pink-600 text-white">
          <CardHeader>
            <CardTitle>Captado Semestral</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{formatCurrency(metrics.nnm_semester.toNumber())}</div>
            <p className="text-sm mt-2">{formatPercentage(metrics.nnm_semester_change)} <span className="text-xs">vs. last semester</span></p>
          </CardContent>
        </Card>

        {/* Card 3: Captado Mensal */}
        <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white">
          <CardHeader>
            <CardTitle>Captado Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{formatCurrency(metrics.nnm_monthly.toNumber())}</div>
            <p className="text-sm mt-2">{formatPercentage(metrics.nnm_monthly_change)} <span className="text-xs">vs. last month</span></p>
          </CardContent>
        </Card>
        
        {/* Card 4: Total de Assessores */}
        <Card>
          <CardHeader>
            <CardTitle>Total de Assessores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{metrics.total_advisors}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Gráfico de Net New Money */}
        <Card>
          <CardHeader>
            <CardTitle>Net New Money Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <NetNewMoneyChart data={monthlyPerformance} />
          </CardContent>
        </Card>

        {/* Tabela de Top Assessores */}
        <Card>
          <CardHeader>
            <CardTitle>Top Assessores por Receita</CardTitle>
          </CardHeader>
          <CardContent>
            <TopAdvisorsTable data={topAdvisors} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}