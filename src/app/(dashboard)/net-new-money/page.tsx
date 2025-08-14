'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Button } from '@/components/ui/button';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

// Updated data to match the second image format
const dotChartData = [
  { month: 'Jan', value: 30, label: '' },
  { month: 'Fev', value: 32, label: '' },
  { month: 'Mar', value: 28, label: '' },
  { month: 'Abr', value: 25, label: '' },
  { month: 'Mai', value: 35, label: '' },
  { month: 'Jun', value: 40, label: 'R$ 33 M' },
  { month: 'Jul', value: 38, label: '' },
  { month: 'Ago', value: 35, label: '' },
  { month: 'Set', value: 32, label: '' },
  { month: 'Out', value: 30, label: '' },
  { month: 'Nov', value: 28, label: '' },
  { month: 'Dez', value: 33, label: '' },
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

const officeMetrics = {
  nnm_2024: 'R$ 157 M',
  nnm_2024_change: '17.5%',
  nnm_semester: 'R$ 78 M',
  nnm_semester_change: '17.5%',
  nnm_monthly: 'R$ 12.7 M',
  nnm_monthly_change: '9.3%',
  total_accumulated: 'R$ 1.4 B',
};

const advisorMetrics = {
  nnm_2024: 'R$ 5 M',
  nnm_2024_change: '17.5%',
  nnm_semester: 'R$ 2.6 M',
  nnm_semester_change: '17.5%',
  nnm_monthly: 'R$ 800 K',
  nnm_monthly_change: '9.3%',
  total_accumulated: 'R$ 1.4 B',
  nnm_chart_peak: 'R$ 33 M'
};

const topAdvisorsData = [
  { name: 'Fábio Garcia', contribution: 'R$ 12.8 M', percentage: '11%' },
  { name: 'Regina Melo', contribution: 'R$ 10.1 M', percentage: '7%' },
  { name: 'Felipe Silva', contribution: 'R$ 9.6 M', percentage: '6%' },
  { name: 'Fernanda Borges', contribution: 'R$ 9.5 M', percentage: '6%' },
  { name: 'Gustavo Santos', contribution: 'R$ 7 M', percentage: '5%' },
];

const CustomBar = (props: any) => {
  const { x, y, width, height, value, label } = props;
  const numDots = Math.min(value, 40); // Cap at 40 for display
  const dots = [];
  const dotSize = 6;
  const dotGap = 1;
  const dotsPerRow = 8; // More dots per row to match the second image
  const rowGap = 1;

  const totalRows = Math.ceil(numDots / dotsPerRow);
  const totalHeight = totalRows * (dotSize + rowGap);
  const startY = y + height - totalHeight;
  const startX = x + width / 2 - (dotsPerRow * (dotSize + dotGap) - dotGap) / 2;

  for (let i = 0; i < numDots; i++) {
    const row = Math.floor(i / dotsPerRow);
    const col = i % dotsPerRow;
    const dotX = startX + col * (dotSize + dotGap);
    const dotY = startY + row * (dotSize + rowGap);

    dots.push(
      <circle key={i} cx={dotX + dotSize / 2} cy={dotY + dotSize / 2} r={dotSize / 2} fill="#6366F1" />
    );
  }

  return (
    <>
      {dots}
      {label && (
        <g>
          <rect x={x + width / 2 - 30} y={y - 30} width={60} height={20} rx={8} fill="#4A5568" />
          <polygon points={`${x + width / 2 - 5},${y - 10} ${x + width / 2 + 5},${y - 10} ${x + width / 2},${y - 5}`} fill="#4A5568" />
          <text
            x={x + width / 2}
            y={y - 20}
            fill="#FFF"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="11"
            fontWeight="500"
          >
            {label}
          </text>
        </g>
      )}
    </>
  );
};

const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <text x={x - 5} y={y + 4} fill="#9CA3AF" fontSize="12" textAnchor="end">
      R$ {payload.value} M
    </text>
  );
};

export default function NetNewMoneyPage() {
  const [activeTab, setActiveTab] = useState('advisors');
  const [activeAdvisorsTab, setActiveAdvisorsTab] = useState('mensal');

  const metrics = activeTab === 'office' ? officeMetrics : advisorMetrics;

  const renderContent = () => {
    if (activeTab === 'office') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <Card style={{ backgroundColor: '#2D2D2D' }}>
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-100">Net New Money</h4>
                    <div className="flex gap-4 text-sm">
                      <span className="font-medium">2024</span>
                      <span className="text-gray-400">Semestral</span>
                      <span className="text-gray-400">Mensal</span>
                    </div>
                  </div>

                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dotChartData} margin={{ top: 40, bottom: 20, left: 60, right: 10 }}>
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6B7280' }}
                        />
                        <YAxis 
                          domain={[0, 40]}
                          ticks={[10, 20, 30, 40]}
                          axisLine={false}
                          tickLine={false}
                          tick={<CustomYAxisTick />}
                        />
                        <Bar
                          dataKey="value"
                          shape={<CustomBar />}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: '#2D2D2D' }}>
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-100">Total Acumulado</h4>
                    <div className="text-right">
                      <img src="/total.png" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={cumulativeData}>
                        <defs>
                          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0891b2" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#0891b2" stopOpacity={0} />
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      );
    } else { // 'advisors' view
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card style={{ backgroundColor: '#2D2D2D' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Mostrando dados de</p>
                    <h3 className="text-lg font-semibold text-gray-100">Henrique Lima Santos</h3>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span className="font-medium">2024</span>
                      <span>Semestral</span>
                      <span>Mensal</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Card style={{ backgroundColor: '#2D2D2D' }}>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold text-gray-100">Net New Money</h4>
                        <div className="flex gap-4 text-sm">
                          <span className=" font-medium">2024</span>
                          <span className="text-gray-400">Semestral</span>
                          <span className="text-gray-400">Mensal</span>
                        </div>
                      </div>

                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={dotChartData} margin={{ top: 40, bottom: 20, left: 60, right: 10 }}>
                            <XAxis
                              dataKey="month"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 12, fill: '#6B7280' }}
                            />
                            <YAxis 
                              domain={[0, 40]}
                              ticks={[10, 20, 30, 40]}
                              axisLine={false}
                              tickLine={false}
                              tick={<CustomYAxisTick />}
                            />
                            <Bar
                              dataKey="value"
                              shape={<CustomBar />}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card style={{ backgroundColor: '#2D2D2D' }}>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold text-gray-100">Total Acumulado</h4>
                      <img src="/total.png" />

                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-32">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={cumulativeData}>
                            <defs>
                              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0891b2" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#0891b2" stopOpacity={0} />
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
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card style={{ backgroundColor: '#2D2D2D' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-100">Top 5 Assessores</CardTitle>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-400">Contribuição total</p>
                    <p className="text-xs text-gray-500">vs. último ano</p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm mt-2 ">
                  <span>2024</span>
                  <span>Semestral</span>
                  <span className="text-blue-500 font-medium">Mensal</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {topAdvisorsData.map((advisor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center overflow-hidden">
                        <span className="text-xs text-white">{advisor.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-200">{advisor.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-200">{advisor.contribution}</p>
                      <Badge className="text-xs bg-green-600 text-white">
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
  };

  return (
    <div className="space-y-6 p-6 min-h-screen" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="rounded-lg shadow-sm" style={{ backgroundColor: '#2D2D2D' }}>
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => setActiveTab('office')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'office'
                ? 'text-white border-b-2'
                : 'text-gray-400 hover:text-gray-200'
              }`}
          >
            Visão Escritório
          </button>
          <button
            onClick={() => setActiveTab('advisors')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'advisors'
                ? 'text-white border-b-2'
                : 'text-gray-400 hover:text-gray-200'
              }`}
          >
            Visão Assessores
          </button>
          <button className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-gray-200">
            Visão Cliente
          </button>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}