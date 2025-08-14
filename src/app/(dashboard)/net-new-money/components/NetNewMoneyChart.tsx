'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';

const advisorsData = [
  { name: 'Fabio Olivera', value: 'R$ 2.8 M', percentage: '7%' },
  { name: 'Regina Mildo', value: 'R$ 2.0 M', percentage: '7%' },
  { name: 'Felipe Silva', value: 'R$ 814 K', percentage: '6%' },
  { name: 'Fernanda Borges', value: 'R$ 814 K', percentage: '6%' },
  { name: 'Gustavo Santos', value: 'R$ 719', percentage: '5%' },
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
  { value: 5 },
  { value: 8 },
  { value: 12 },
  { value: 15 },
  { value: 18 },
  { value: 22 },
  { value: 25 },
  { value: 28 },
  { value: 32 },
  { value: 35 },
  { value: 38 },
  { value: 40 },
];

export default function NetNewMoneyPage() {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Header Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex border-b border-gray-200">
          <button className="px-6 py-3 text-sm font-medium text-whiterounded-tl-lg border-b-2 border-blue-600">
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Henriques Performance */}
        <div className="lg:col-span-2">
          <Card className="bg-white">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Mostrando dados de</p>
                  <h3 className="text-lg font-semibold text-gray-900">Henrique Lima Santos</h3>
                </div>
                <div className="text-right">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="text-blue-600 font-medium">2024</span>
                    <span>Semestral</span>
                    <span>Mensal</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Performance Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                  <p className="text-sm opacity-90">NNM 2024</p>
                  <p className="text-2xl font-bold">R$ 157 M</p>
                  <div className="flex items-center mt-2">
                    <span className="text-blue-200">↗ 17.5%</span>
                  </div>
                  <p className="text-xs opacity-75">Essa semana</p>
                </div>
                
                <div className="bg-gray-800 text-white p-4 rounded-lg">
                  <p className="text-sm opacity-90">NNM Semestral</p>
                  <p className="text-2xl font-bold">R$ 78 M</p>
                  <div className="flex items-center mt-2">
                    <span className="text-red-300">● 17.5%</span>
                  </div>
                  <p className="text-xs opacity-75">Desde o mês passado</p>
                </div>
                
                <div className="bg-green-600 text-white p-4 rounded-lg">
                  <p className="text-sm opacity-90">NNM Mensal</p>
                  <p className="text-2xl font-bold">R$ 12.7 M</p>
                  <div className="flex items-center mt-2">
                    <span className="text-green-300">● 9.3%</span>
                  </div>
                  <p className="text-xs opacity-75">Desde o ano passado</p>
                </div>
              </div>

              {/* Chart Section */}
              <div className="space-y-6">
                {/* Net New Money Chart */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Net New Money</h4>
                    <div className="flex gap-2 text-sm">
                      <span className="text-blue-600 font-medium">2024</span>
                      <span className="text-gray-500">Semestral</span>
                      <span className="text-gray-500">Mensal</span>
                    </div>
                  </div>
                  <div className="text-right mb-2">
                    <p className="text-lg font-bold text-blue-600">R$ 33 M</p>
                  </div>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <XAxis 
                          dataKey="month" 
                          axisLine={false} 
                          tickLine={false}
                          tick={{ fontSize: 12 }}
                        />
                        <YAxis hide />
                        <Bar 
                          dataKey="value" 
                          fill="#3B82F6" 
                          radius={[3, 3, 0, 0]}
                          maxBarSize={40}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Total Acumulado */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Total Acumulado</h4>
                    <div className="text-right">
                      <p className="text-lg font-bold text-teal-600">R$ 1.4 B</p>
                    </div>
                  </div>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={cumulativeData}>
                        <defs>
                          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0891b2" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#0891b2" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#0891b2" 
                          fill="url(#colorGradient)" 
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Top 5 Assessores */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Top 5 Assessores</CardTitle>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-600">Contribuição total</p>
                <p className="text-xs text-gray-500">vs. último ano</p>
              </div>
            </div>
            <div className="flex gap-4 text-sm mt-2">
              <span className="text-blue-600 font-medium">2024</span>
              <span className="text-gray-500">Semestral</span>
              <span className="text-gray-500">Mensal</span>
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
                    <span className="text-xs">👤</span>
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
    </div>
  );
}