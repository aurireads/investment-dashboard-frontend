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

      {/* Date Period Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-gray-600">Data inicial</p>
            <p className="text-lg font-semibold">01/01/2024</p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-gray-600">Data final</p>
            <p className="text-lg font-semibold">01/01/2025</p>
          </CardContent>
        </Card>
        <div></div>
      </div>

      {/* Main Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-green-600 text-white">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium opacity-90">Início do Período</h3>
            <p className="text-3xl font-bold">R$ 1.155 B</p>
            <div className="flex items-center mt-2">
              <span className="text-green-300">↗ 24.3%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-600 text-white">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium opacity-90">Fim do Período</h3>
            <p className="text-3xl font-bold">R$ 1.400 B</p>
            <div className="flex items-center mt-2">
              <span className="text-blue-300">↗ 17.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-gray-600">Variação Total</h3>
            <p className="text-3xl font-bold text-gray-900">📈 36.8%</p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Equivalência</span>
                <span className="font-medium">📊 17.6%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Rentabilidade real</span>
                <span className="font-medium">📈 19.60%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AuC Chart */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>AuC</CardTitle>
              <div className="flex gap-2 text-sm">
                <span className="text-blue-600">Semestral</span>
                <span className="text-gray-500">Mensal</span>
                <span className="text-gray-500">2024</span>
                <span className="text-gray-500">Max</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-purple-600">R$ 1.4 B</p>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={aucData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Captação Chart */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Captação</CardTitle>
              <div className="flex gap-2 text-sm">
                <span className="text-blue-600">Diário</span>
                <span className="text-gray-500">Semanal</span>
                <span className="text-gray-500">2024</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={captacaoData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Bar dataKey="value" fill="#3B82F6" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}