'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const topAdvisorsData = [
  { name: 'Advisor 1', value: 'R$ 1.2 M', progress: 80, imageSrc: '/advisor-images/Fabio.png' },
  { name: 'Advisor 2', value: 'R$ 1.0 M', progress: 65, imageSrc: '/advisor-images/Regina.png' },
  { name: 'Advisor 3', value: 'R$ 900 K', progress: 58, imageSrc: '/advisor-images/Felipe.png' },
  { name: 'Advisor 4', value: 'R$ 890 K', progress: 70, imageSrc: '/advisor-images/Fernanda.png' },
  { name: 'Advisor 5', value: 'R$ 850 K', progress: 65, imageSrc: '/advisor-images/Gustavo.png' },
  { name: 'Advisor 6', value: 'R$ 840 K', progress: 68, imageSrc: '/advisor-images/Regina.png' },
  { name: 'Advisor 7', value: 'R$ 810 K', progress: 62, imageSrc: '/advisor-images/7.png' },
  { name: 'Advisor 8', value: 'R$ 790 K', progress: 58, imageSrc: '/advisor-images/Renata.png' },
  { name: 'Advisor 9', value: 'R$ 500 K', progress: 45, imageSrc: '/advisor-images/9.png' },
  { name: 'Advisor 10', value: 'R$ 100 K', progress: 38, imageSrc: '/advisor-images/Gustavo.png' },
];

const pieData = [
  { name: 'Reinaldo', value: 34, revenue: 'R$ 990 K' },
  { name: 'Joseph', value: 24, revenue: 'R$ 850 K' },
  { name: 'Marina', value: 20, revenue: 'R$ 900 K' },
  { name: 'Renata', value: 22, revenue: 'R$ 750 K' },
];

const PIE_COLORS = ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981'];

const TOP_ADVISORS_BAR_COLORS = ['#F59E0B', '#4B5563', '#F97316', '#10B981']; // Amarelo, Cinza, Laranja, Verde

export default function RevenuePage() {
  const getBarColor = (index: number) => {
    switch (index) {
      case 0:
        return '#F59E0B'; // Amarelo para o primeiro
      case 1:
        return '#4B5563'; // Cinza para o segundo
      case 2:
        return '#F97316'; // Laranja para o terceiro
      default:
        return '#10B981'; // Verde para o restante
    }
  };

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
              <img src="/receita.png" />
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
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {index + 1}
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={advisor.imageSrc}
                          alt={`Foto de perfil de ${advisor.name}`}
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-700 rounded-full h-6 relative overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{ width: `${advisor.progress}%`, backgroundColor: getBarColor(index) }}
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
                    <span className="text-sm font-medium text-gray-100">{item.revenue}</span>
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