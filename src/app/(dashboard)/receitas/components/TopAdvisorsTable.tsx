'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChevronDown } from 'lucide-react';

const topAdvisorsData = [
  { name: 'Advisor 1', value: 'R$ 1.3 M', color: '#FEF3C7' },
  { name: 'Advisor 2', value: 'R$ 1.2 M', color: '#E5E7EB' },
  { name: 'Advisor 3', value: 'R$ 900 K', color: '#FDE68A' },
  { name: 'Advisor 4', value: 'R$ 800 K', color: '#D1FAE5' },
  { name: 'Advisor 5', value: 'R$ 850 K', color: '#D1FAE5' },
  { name: 'Advisor 6', value: 'R$ 840 K', color: '#D1FAE5' },
  { name: 'Advisor 7', value: 'R$ 810 K', color: '#D1FAE5' },
  { name: 'Advisor 8', value: 'R$ 790 K', color: '#D1FAE5' },
  { name: 'Advisor 9', value: 'R$ 600 K', color: '#D1FAE5' },
  { name: 'Advisor 10', value: 'R$ 500 K', color: '#D1FAE5' },
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
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Receitas</h1>
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border">
          <span className="text-sm">Janeiro</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Revenue and Top Advisors */}
        <div className="lg:col-span-2 space-y-6">
          {/* Revenue Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Receita Total em Janeiro</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-3xl font-bold text-purple-600">R$ 7.160.000</span>
                <span className="text-green-600 text-sm font-medium">↗ 37.8%</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total de Assessores</p>
              <p className="text-2xl font-bold">30</p>
              <span className="text-green-600 text-sm">↗</span>
            </div>
          </div>

          {/* Top 10 Assessores Geradores de Receita */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Top 10 Assessores Geradores de Receita</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topAdvisorsData.map((advisor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {index + 1}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-xs">👤</span>
                      </div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div 
                        className="h-6 rounded-full relative"
                        style={{ backgroundColor: advisor.color }}
                      >
                        <div 
                          className="h-full bg-yellow-400 rounded-full"
                          style={{ width: `${Math.random() * 80 + 20}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium min-w-[80px] text-right">{advisor.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Pie Chart */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Receita por Assessor (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
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
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index] }}
                    ></div>
                    <span className="text-sm text-gray-700">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">R$ 880 K</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full inline-block ml-2"></div>
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