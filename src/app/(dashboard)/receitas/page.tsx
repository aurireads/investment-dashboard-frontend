'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const topAdvisorsData = [
  { name: 'Advisor 1', value: 'R$ 1.3 M', progress: 85 },
  { name: 'Advisor 2', value: 'R$ 1.2 M', progress: 80 },
  { name: 'Advisor 3', value: 'R$ 900 K', progress: 65 },
  { name: 'Advisor 4', value: 'R$ 800 K', progress: 60 },
  { name: 'Advisor 5', value: 'R$ 850 K', progress: 70 },
  { name: 'Advisor 6', value: 'R$ 840 K', progress: 68 },
  { name: 'Advisor 7', value: 'R$ 810 K', progress: 62 },
  { name: 'Advisor 8', value: 'R$ 790 K', progress: 58 },
  { name: 'Advisor 9', value: 'R$ 600 K', progress: 45 },
  { name: 'Advisor 10', value: 'R$ 500 K', progress: 38 },
];

const pieData = [
  { name: 'Reinaldo', value: 34 },
  { name: 'Joseph', value: 24 },
  { name: 'Marina', value: 20 },
  { name: 'Bianca', value: 22 },
];

const PIE_COLORS = ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981'];

const TOP_ADVISORS_COLORS = [
  '#A855F7', // Roxo claro
  '#4B5563', // Cinza escuro
  '#3B82F6', // Azul claro
  '#10B981', // Verde escuro
  '#EF4444', // Vermelho
];

export default function RevenuePage() {
  return (
    <div className="space-y-6 p-6 min-h-screen" style={{ backgroundColor: '#2D2D2D' }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-100">Receitas</h1>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg border shadow-sm border-gray-700" style={{ backgroundColor: '#3A3A3A' }}>
          <span className="text-sm text-gray-300">Janeiro</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Revenue and Top Advisors */}
        <div className="lg:col-span-2 space-y-6">
          {/* Revenue Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-100">Receita Total em Janeiro</h2>
<img src="/receita.png"/>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Total de Assessores</p>
              <div className="flex items-center justify-end gap-1">
                <p className="text-2xl font-bold text-gray-100">30</p>
                <span className="text-green-500 text-sm">●</span>
              </div>
            </div>
          </div>

          {/* Top 10 Assessores Geradores de Receita */}
          <Card style={{ backgroundColor: '#3A3A3A' }} className="border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-100">Top 10 Assessores Geradores de Receita</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topAdvisorsData.map((advisor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm" style={{ backgroundColor: TOP_ADVISORS_COLORS[index % TOP_ADVISORS_COLORS.length] }}>
                        {index + 1}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="text-xs">👤</span>
                      </div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-700 rounded-full h-6 relative overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{ width: `${advisor.progress}%`, backgroundColor: '#10B981' }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium min-w-[80px] text-right text-gray-100">
                      {advisor.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Pie Chart */}
        <Card style={{ backgroundColor: '#3A3A3A' }} className="border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-100">Receita por Assessor (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="mt-6 space-y-3">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: PIE_COLORS[index] }}
                    ></div>
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-100">R$ 880 K</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}