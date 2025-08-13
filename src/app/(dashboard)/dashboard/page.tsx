'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const topAssessorsData = [
  { name: 'Fabio Olivera', revenue: 'R$ 2.8 M', percentage: '7%' },
  { name: 'Regina Mildo', revenue: 'R$ 2.0 M', percentage: '7%' },
  { name: 'Felipe Silva', revenue: 'R$ 814 K', percentage: '6%' },
  { name: 'Fernanda Borges', revenue: 'R$ 814 K', percentage: '6%' },
  { name: 'Gustavo Santos', revenue: 'R$ 719', percentage: '5%' },
];

const monthlyData = [
  { month: 'Jan', value: 10 },
  { month: 'Fev', value: 15 },
  { month: 'Mar', value: 20 },
  { month: 'Abr', value: 25 },
  { month: 'Mai', value: 18 },
  { month: 'Jun', value: 30 },
  { month: 'Jul', value: 28 },
  { month: 'Ago', value: 35 },
  { month: 'Set', value: 32 },
  { month: 'Out', value: 40 },
  { month: 'Nov', value: 38 },
  { month: 'Dez', value: 45 },
];

const cumulativeData = [
  { month: 'R$ 5 M', value: 5 },
  { month: 'R$ 10 M', value: 10 },
  { month: 'R$ 15 M', value: 15 },
  { month: 'R$ 20 M', value: 20 },
  { month: 'R$ 25 M', value: 25 },
  { month: 'R$ 30 M', value: 30 },
  { month: 'R$ 35 M', value: 35 },
  { month: 'R$ 40 M', value: 40 },
];

const assessorsTable = [
  { name: 'Jane Cooper', annual: 'R$ 45.0 M', captured: 'R$ 115.0 M', paceWeekly: 'R$ 225.43 %', monthly: 'R$ 5.0 M', monthlyCapture: 'R$ 18.2 M', paceMensal: 'R$ 165.23 %' },
  { name: 'Math Smith', annual: 'R$ 40.9 M', captured: 'R$ 110.0 M', paceWeekly: 'R$ 225.43 %', monthly: 'R$ 5.0 M', monthlyCapture: 'R$ 18.2 M', paceMensal: 'R$ 265.00 %' },
  { name: 'Philip Wade', annual: 'R$ 38.0 M', captured: 'R$ 93.0 M', paceWeekly: 'R$ 245.43 %', monthly: 'R$ 3.5 M', monthlyCapture: 'R$ 16.7 M', paceMensal: 'R$ 268.22 %' },
  { name: 'Tim Price', annual: 'R$ 36.0 M', captured: 'R$ 66.0 M', paceWeekly: 'R$ 175.00 %', monthly: 'R$ 5.0 M', monthlyCapture: 'R$ 24.3 M', paceMensal: 'R$ 360.00 %' },
  { name: 'Carol Stevens', annual: 'R$ 30.0 M', captured: 'R$ 115.0 M', paceWeekly: 'R$ 535.67 %', monthly: 'R$ 3.0 M', monthlyCapture: 'R$ 19.2 M', paceMensal: 'R$ 530.23 %' },
  { name: 'Amelia Parker', annual: 'R$ 27.5 M', captured: 'R$ 100.0 M', paceWeekly: 'R$ 525.35 %', monthly: 'R$ 4.0 M', monthlyCapture: 'R$ 17.2 M', paceMensal: 'R$ 375.21 %' },
  { name: "Michael O'leary", annual: 'R$ 25.0 M', captured: 'R$ 100.0 M', paceWeekly: 'R$ 200.30 %', monthly: 'R$ 5.0 M', monthlyCapture: 'R$ 17.2 M', paceMensal: 'R$ 244.00 %' },
  { name: 'Owen Tomsson', annual: 'R$ 26.0 M', captured: 'R$ 135.0 M', paceWeekly: 'R$ 190.50 %', monthly: 'R$ 5.0 M', monthlyCapture: 'R$ 22.0 M', paceMensal: 'R$ 69.9 %' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Main Metric Card */}
      <Card className="bg-white">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Captado Anual Total</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-4xl font-bold text-gray-900">R$ 355.000.000</span>
                <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded-full">↗ 37.8%</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Janeiro</p>
              <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                Janeiro
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-green-600 text-white p-6 rounded-lg">
              <p className="text-sm opacity-90">Captado Anual</p>
              <p className="text-2xl font-bold">R$ 196 M</p>
              <p className="text-sm opacity-90">↗ 24.3%</p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg">
              <p className="text-sm opacity-90">Captado Semestral</p>
              <p className="text-2xl font-bold">R$ 98 M</p>
              <p className="text-sm opacity-90">↗ 17.5%</p>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <p className="text-sm opacity-90">Captado Mensal</p>
              <p className="text-2xl font-bold">R$ 12.4 M</p>
              <p className="text-sm opacity-90">↗ 8.8%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assessors Table */}
      <Card className="bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Metas por assessor</CardTitle>
              <p className="text-sm text-gray-600">Assessores ativos</p>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button variant="default" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filtrar por Motivo
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Nome</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Meta Anual</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Captado Anual</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Pace Semanal</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Meta Mensal</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Captado Mensal</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Pace Mensal</th>
                </tr>
              </thead>
              <tbody>
                {assessorsTable.map((assessor, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-medium text-sm">
                          {assessor.name.charAt(0)}
                        </div>
                        <span className="font-medium">{assessor.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-900">{assessor.annual}</td>
                    <td className="py-4 px-4 text-gray-900">{assessor.captured}</td>
                    <td className="py-4 px-4 text-gray-900">{assessor.paceWeekly}</td>
                    <td className="py-4 px-4 text-gray-900">{assessor.monthly}</td>
                    <td className="py-4 px-4 text-gray-900">{assessor.monthlyCapture}</td>
                    <td className="py-4 px-4 text-gray-900">{assessor.paceMensal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Mostrando assessores 1 ao 8 de 30
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="default" className="flex items-center">
                <ChevronLeft className="w-4 h-4 mr-1" />
                1
              </Button>
              <Button variant="primary">2</Button>
              <Button variant="default">3</Button>
              <Button variant="default">4</Button>
              <Button variant="default" className="flex items-center">
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}