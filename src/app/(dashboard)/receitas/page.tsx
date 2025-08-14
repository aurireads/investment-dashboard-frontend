'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

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
  { name: 'Reinaldo', value: 34, color: '#6366F1' },
  { name: 'Joseph', value: 24, color: '#8B5CF6' },
  { name: 'Marina', value: 20, color: '#06B6D4' },
  { name: 'Bianca', value: 22, color: '#F59E0B' },
];

const COLORS = ['#6366F1', '#8B5CF6', '#06B6D4', '#F59E0B'];

export default function RevenuePage() {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen dark:style={{ background: '#2D2D2D' }}">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Receitas</h1>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <span className="text-sm text-gray-700 dark:text-gray-300">Janeiro</span>
          <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Revenue and Top Advisors */}
        <div className="lg:col-span-2 space-y-6">
          {/* Revenue Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Receita Total em Janeiro</h2>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-4xl font-bold text-purple-600 dark:text-purple-500">R$ 7.160.000</span>
                <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded-full dark:bg-green-800 dark:text-green-200">↗ 37.8%</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total de Assessores</p>
              <div className="flex items-center justify-end gap-1">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">30</p>
                <span className="text-green-600 text-sm dark:text-green-500">●</span>
              </div>
            </div>
          </div>

          {/* Top 10 Assessores Geradores de Receita */}
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Top 10 Assessores Geradores de Receita</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topAdvisorsData.map((advisor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {index + 1}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center dark:bg-gray-700">
                        <span className="text-xs">👤</span>
                      </div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-yellow-100 rounded-full h-6 relative overflow-hidden dark:bg-yellow-900">
                        <div 
                          className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                          style={{ width: `${advisor.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium min-w-[80px] text-right text-gray-900 dark:text-gray-100">
                      {advisor.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Pie Chart */}
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Receita por Assessor (%)</CardTitle>
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
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                      style={{ backgroundColor: COLORS[index] }}
                    ></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">R$ 880 K</span>
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