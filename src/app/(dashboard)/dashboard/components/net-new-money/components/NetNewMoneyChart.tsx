'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

const advisorsData = [
  { name: 'Fabio Olivera', value: 'R$ 2.8 M', percentage: '7%', avatar: '👨‍💼' },
  { name: 'Regina Mildo', value: 'R$ 2.0 M', percentage: '7%', avatar: '👩‍💼' },
  { name: 'Felipe Silva', value: 'R$ 814 K', percentage: '6%', avatar: '👨‍💼' },
  { name: 'Fernanda Borges', value: 'R$ 814 K', percentage: '6%', avatar: '👩‍💼' },
  { name: 'Gustavo Santos', value: 'R$ 719', percentage: '5%', avatar: '👨‍💼' },
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
  { month: 'Jan', value: 5 },
  { month: 'Fev', value: 8 },
  { month: 'Mar', value: 12 },
  { month: 'Abr', value: 15 },
  { month: 'Mai', value: 18 },
  { month: 'Jun', value: 22 },
  { month: 'Jul', value: 25 },
  { month: 'Ago', value: 28 },
  { month: 'Set', value: 32 },
  { month: 'Out', value: 35 },
  { month: 'Nov', value: 38 },
  { month: 'Dez', value: 40 },
];

export default function NetNewMoneyPage() {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Header Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex border-b border-gray-200">
          <button className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-tl-lg">
            Visão Escritório
          </button>
          <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
            Visão Assessores
          </button>
          <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
            Visão Cliente
          </button>
        </div>
      </div>

      {/* Top Section - Cards and Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Henriques Performance Card */}
        <div className="lg:col-span-2">
          <Card className="bg-white">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Mostrando dados de</p>
                  <h3 className="text-lg font-semibold">Henrique Lima Santos</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">2024 • Semestral • Mensal</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                  <p className="text-sm opacity-90">NNM 2024</p>
                  <p className="text-2xl font-bold">R$ 5 M</p>
                  <p className="text-sm opacity-90">↗ 17.0%</p>
                  <p className="text-xs">Desde ontem</p>
                </div>
                <div className="bg-gray-800 text-white p-4 rounded-lg">
                  <p className="text-sm opacity-90">NNM Semestral</p>
                  <p className="text-2xl font-bold">R$ 2.6 M</p>
                  <p className="text-sm opacity-90">● 17.0%</p>
                  <p className="text-xs">Desde o mês passado</p>
                </div>
                <div className="bg-green-600 text-white p-4 rounded-lg">
                  <p className="text-sm opacity-90">NNM Mensal</p>
                  <p className="text-2xl font-bold">R$ 800 K</p>
                  <p className="text-xs">Desde o ano passado</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top 5 Assessores */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Top 5 Assessores</CardTitle>
            <div className="flex gap-4 text-sm">
              <span className="text-blue-600 font-medium">2024</span>
              <span className="text-gray-500">Semestral</span>
              <span className="text-gray-500">Mensal</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Contribuição total</p>
              <p className="text-xs text-gray-500">vs. último ano</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {advisorsData.map((advisor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xs">{advisor.avatar}</span>
                  </div>
                  <span className="text-sm font-medium">{advisor.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{advisor.value}</p>
                  <Badge variant="success" className="text-xs">
                    {advisor.percentage}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Net New Money Chart */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Net New Money</CardTitle>
              <div className="flex gap-2 text-sm">
                <span className="text-blue-600">Atual</span>
                <span className="text-gray-500">Semestral</span>
                <span className="text-gray-500">Mensal</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">R$ 10 M</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Bar dataKey="value" fill="#3B82F6" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Total Acumulado */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Total Acumulado</CardTitle>
            <div className="text-right">
              <p className="text-lg font-bold text-blue-600">R$ 1.4 B</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cumulativeData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#10B981" 
                    fill="url(#colorGradient)" 
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}