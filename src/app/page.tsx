'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Search, Filter, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

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

// Função para determinar cor do valor captado (vermelho para valores baixos)
const getCapturedColor = (name: string) => {
  const redValues = ["Philip Wade", "Tim Price", "Amelia Parker", "Michael O'leary"];
  return redValues.includes(name) ? "text-red-500" : "text-white";
};

export default function DashboardPage() {
  const [selectedMonth, setSelectedMonth] = useState('Janeiro');

  return (
    <div className="space-y-6 p-6 min-h-screen" style={{ background: '#2D2D2D' }}>
      {/* Main Metric Card */}
      <Card style={{ background: '#2D2D2D' }} className="border-0">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Captado Anual Total</h1>
                <img src="/Valor.png" alt="Imagem de R$ 355.000.000 com gradiente de cor" width="300" />
            </div>
            <div className="relative">
              <Button className="flex items-center gap-2 bg-gray-700 text-white hover:bg-gray-600 border-0">
                <span className="text-sm">{selectedMonth}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#3A3A3A] text-white p-6 rounded-lg border border-gray-600">
              <p className="text-sm opacity-90">Captado Anual</p>
              <p className="text-2xl font-bold">R$ 196 M</p>
              <p className="text-green-500 text-sm">↗ 24.3%</p>
            </div>
            <div className="bg-[#3A3A3A] text-white p-6 rounded-lg border border-gray-600">
              <p className="text-sm opacity-90">Captado Semestral</p>
              <p className="text-2xl font-bold">R$ 98 M</p>
              <p className="text-green-500 text-sm">↗ 17.5%</p>
            </div>
            <div className="bg-[#3A3A3A] text-white p-6 rounded-lg border border-gray-600">
              <p className="text-sm opacity-90">Captado Mensal</p>
              <p className="text-2xl font-bold">R$ 12.4 M</p>
              <p className="text-green-500 text-sm">↗ 8.8%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assessors Table */}
      <Card style={{ background: '#2D2D2D' }} className="border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Metas por assessor</CardTitle>
              <p className="text-sm text-gray-400">Assessores ativos</p>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar"
                  className="pl-10 pr-4 py-2 border border-gray-600 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button className="flex items-center gap-2 text-white border-0">
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
                <tr className="border-b border-gray-600">
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Nome</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Meta Anual</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Captado Anual</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Pace Semanal</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Meta Mensal</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Captado Mensal</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Pace Mensal</th>
                </tr>
              </thead>
              <tbody>
                {assessorsTable.map((assessor, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        </div>
                        <span className="font-medium text-white">{assessor.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-white">{assessor.annual}</td>
                    <td className={`py-4 px-4 ${getCapturedColor(assessor.name)}`}>{assessor.captured}</td>
                    <td className="py-4 px-4 text-green-500">{assessor.paceWeekly}</td>
                    <td className="py-4 px-4 text-white">{assessor.monthly}</td>
                    <td className="py-4 px-4 text-white">{assessor.monthlyCapture}</td>
                    <td className="py-4 px-4 text-green-500">{assessor.paceMensal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-600">
            <p className="text-sm text-gray-400">
              Mostrando assessores 1 ao 8 de 30
            </p>
            <div className="flex items-center space-x-2">
              <Button className="flex items-center bg-gray-700 text-white hover:bg-gray-600 border-0">
                <ChevronLeft className="w-4 h-4 mr-1" />
                1
            </Button>
            <Button className="px-3 py-1 bg-gray-600 text-white border-gray-600 rounded">1</Button>
            <Button className="px-3 py-1 bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600 rounded">2</Button>
            <Button className="px-3 py-1 bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600 rounded">3</Button>
            <Button className="px-3 py-1 bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600 rounded">4</Button>
            <Button className="p-2 bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600 rounded">
              <ChevronRight className="w-4 h-4" />
            </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}