'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';

const aucData = [
  { month: 'Jan', value: 0 },
  { month: 'Fev', value: 5 },
  { month: 'Mar', value: 10 },
  { month: 'Abr', value: 15 },
  { month: 'Mai', value: 20 },
  { month: 'Jun', value: 25 },
  { month: 'Jul', value: 30 },
  { month: 'Ago', value: 35 },
  { month: 'Set', value: 40 },
  { month: 'Out', value: 45 },
  { month: 'Nov', value: 40 },
  { month: 'Dez', value: 35 },
];

const captacaoData = [
  { month: 'Jan', value: 10 },
  { month: 'Fev', value: 20 },
  { month: 'Mar', value: 15 },
  { month: 'Abr', value: 25 },
  { month: 'Mai', value: 30 },
  { month: 'Jun', value: 35 },
  { month: 'Jul', value: 40 },
];

export default function CustodyPage() {
  return (
    <div className="min-h-screen p-6" style={{ background: '#2D2D2D' }}>
      {/* Header with toggle for dark mode */}
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Modo escuro</span>
          <div className="w-10 h-6 bg-blue-600 rounded-full relative">
            <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
          </div>
        </div>
      </div>

      {/* Header Tabs */}
      <div className="mb-6">
        <div className="flex">
          <button className="px-6 py-3 text-sm font-medium text-white rounded-tl-lg border-b-2">
            Visão Escritório
          </button>
          <button
            className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-gray-200"
            style={{ background: '#2D2D2D' }}
          >
            Visão Assessores
          </button>
          <button
            className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-gray-200"
            style={{ background: '#2D2D2D' }}
          >
            Visão Cliente
          </button>
        </div>
      </div>

      {/* Date Period Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mb-6">
        <Card className="border-gray-300 bg-[#3A3A3A] rounded-md">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-gray-400  mb-1">Data inicial</p>
            <p className="text-lg font-semibold text-white">01/01/2024</p>
          </CardContent>
        </Card>
        <Card className="border-gray-300 bg-[#3A3A3A] rounded-md">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-gray-400 mb-1">Data final</p>
            <p className="text-lg font-semibold text-white">01/01/2025</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="dark:border-gray-700 text-white">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium opacity-90">Início do Período</h3>
            <p className="text-3xl font-bold">R$ 1.155 B</p>
            <div className="flex items-center mt-2">
              <span className="text-green-200">↗ 24.3%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:border-blue-700 text-white">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium opacity-90">Fim do Período</h3>
            <p className="text-3xl font-bold">R$ 1.400 B</p>
            <div className="flex items-center mt-2">
              <span className="text-blue-200">↗ 17.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-300 ">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium ">Variação Total</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-3xl font-bold text-white">📈 36.8%</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Captação total</span>
                <span className="font-medium text-white">📊 17.5%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Rentabilidade total</span>
                <span className="font-medium text-white">📈 19.65%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AuC Chart */}
        <Card className="border-gray-300 bg-[#3A3A3A]">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-white">AuC</CardTitle>
              <div className="flex gap-3 text-sm">
                <span className="text-gray-400">Semestral</span>
                <span className="text-gray-400">Mensal</span>
                <span className="text-blue-400 font-medium">2024</span>
                <span className="text-gray-400">Max</span>
              </div>
            </div>
            <p className="text-2xl font-bold " style={{
              color: '#91D88A'
            }}>R$ 1.4 B</p>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={aucData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#9CA3AF' }}
                  />
                  <YAxis hide />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#A855F7"
                    strokeWidth={3}
                    dot={false}
                    strokeDasharray="0"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Captação Chart */}
        <Card className="border-gray-300 bg-[#3A3A3A]">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-white">Captação</CardTitle>
              <div className="flex gap-3 text-sm">
                <span className="text-blue-400 font-medium">Diário</span>
                <span className="text-gray-400">Semanal</span>
                <span className="text-gray-400">2024</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={captacaoData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#9CA3AF' }}
                  />
                  <YAxis hide />
                  <Bar
                    dataKey="value"
                    fill="#3B82F6"
                    radius={[3, 3, 0, 0]}
                    maxBarSize={50}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}