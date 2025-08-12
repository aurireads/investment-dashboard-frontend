'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, Briefcase, TrendingUp, Users } from 'lucide-react';
import { StatsCard, HoldingsTable } from '@/components/Dashboard';
import { DashboardMetrics, TopAdvisorMetric, MonthlyPerformance, formatCurrency, formatPercentage } from '@/types';
import { fetchDashboardMetrics, fetchTopAdvisors, fetchMonthlyPerformance } from '@/lib/api';
import Decimal from 'decimal.js';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [topAdvisors, setTopAdvisors] = useState<TopAdvisorMetric[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyPerformance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        
        // Carregar dados em paralelo
        const [metricsData, advisorsData, monthlyDataRaw] = await Promise.all([
          fetchDashboardMetrics(),
          fetchTopAdvisors(),
          fetchMonthlyPerformance()
        ]);

        setMetrics(metricsData);
        setTopAdvisors(advisorsData);
        setMonthlyData(monthlyDataRaw);
      } catch (error) {
        console.error('Erro ao carregar dados do dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  // Função para converter Decimal para número para os gráficos
  const prepareChartData = (data: MonthlyPerformance[]) => {
    return data.map(item => ({
      month: item.month,
      nnm_value: item.nnm_value.toNumber(),
      revenue_value: item.revenue_value.toNumber(),
      commission_value: item.commission_value.toNumber(),
      auc_value: item.auc_value.toNumber(),
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Erro ao carregar dados do dashboard</div>
      </div>
    );
  }

  const chartData = prepareChartData(monthlyData);

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="AUC Total"
          value={formatCurrency(metrics.auc_total)}
          change={formatPercentage(metrics.auc_variation)}
          icon={DollarSign}
          trend={metrics.auc_variation.gte(0) ? "up" : "down"}
        />
        <StatsCard
          title="NNM Semanal"
          value={formatCurrency(metrics.nnm_current_week)}
          change={formatPercentage(metrics.nnm_current_week_change)}
          icon={TrendingUp}
          trend={metrics.nnm_current_week_change.gte(0) ? "up" : "down"}
        />
        <StatsCard
          title="Receita Janeiro"
          value={formatCurrency(metrics.total_revenue_january)}
          change={formatPercentage(metrics.total_revenue_change)}
          icon={Briefcase}
          trend={metrics.total_revenue_change.gte(0) ? "up" : "down"}
        />
        <StatsCard
          title="Total Assessores"
          value={metrics.total_advisors.toString()}
          change="Ativos"
          icon={Users}
          trend="up"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Performance Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance Mensal - NNM</h3>
            <div className="flex space-x-2">
              {['NNM', 'Receita', 'Comissão', 'AUC'].map(metric => (
                <button key={metric} className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  metric === 'NNM' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                }`}>
                  {metric}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" tickFormatter={(value) => formatCurrency(new Decimal(value))} />
              <Tooltip formatter={(value) => [formatCurrency(new Decimal(value as number)), 'NNM']} />
              <Line 
                type="monotone" 
                dataKey="nnm_value" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Advisors */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Assessores</h3>
          <div className="space-y-4">
            {topAdvisors.slice(0, 5).map((advisor, index) => (
              <div key={advisor.advisor_id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{advisor.advisor_name}</div>
                    <div className="text-xs text-gray-500">{advisor.clients_count} clientes</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {formatCurrency(advisor.revenue)}
                  </div>
                  <div className={`text-xs ${advisor.change_percent.gte(0) ? 'text-green-600' : 'text-red-600'}`}>
                    {formatPercentage(advisor.change_percent)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Comissões</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Bruta (Semana)</span>
              <span className="text-sm font-medium">{formatCurrency(metrics.gross_commission_week)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Líquida (Mês)</span>
              <span className="text-sm font-medium">{formatCurrency(metrics.net_commission_month)}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-sm font-medium text-gray-900">Total</span>
              <span className="text-sm font-bold text-gray-900">{formatCurrency(metrics.total_commission)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="text-md font-semibold text-gray-900 mb-4">NNM Performance</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Semestre</span>
              <span className="text-sm font-medium">{formatCurrency(metrics.nnm_semester)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Mensal</span>
              <span className="text-sm font-medium">{formatCurrency(metrics.nnm_monthly)}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-sm font-medium text-gray-900">Semanal</span>
              <span className="text-sm font-bold text-gray-900">{formatCurrency(metrics.nnm_current_week)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="text-md font-semibold text-gray-900 mb-4">AUC (Assets Under Custody)</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Início Período</span>
              <span className="text-sm font-medium">{formatCurrency(metrics.auc_start_period)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Fim Período</span>
              <span className="text-sm font-medium">{formatCurrency(metrics.auc_end_period)}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-sm font-medium text-gray-900">Total Atual</span>
              <span className="text-sm font-bold text-gray-900">{formatCurrency(metrics.auc_total)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}