'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, Cell, Text } from 'recharts';
import { Button } from '@/components/ui/button';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const monthlyData = [
  { month: 'Jan', value: 4, label: '' },
  { month: 'Fev', value: 3, label: '' },
  { month: 'Mar', value: 3, label: '' },
  { month: 'Abr', value: 5, label: '' },
  { month: 'Mai', value: 4, label: '' },
  { month: 'Jun', value: 7, label: 'R$ 13 M' },
  { month: 'Jul', value: 6, label: '' },
  { month: 'Ago', value: 5, label: '' },
  { month: 'Set', value: 6, label: '' },
  { month: 'Out', value: 7, label: '' },
  { month: 'Nov', value: 5, label: '' },
  { month: 'Dez', value: 7, label: '' },
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
  nnm_chart_peak: 'R$ 33 M'
};

const advisorMetrics = {
  nnm_2024: 'R$ 5 M',
  nnm_2024_change: '17.5%',
  nnm_semester: 'R$ 2.6 M',
  nnm_semester_change: '17.5%',
  nnm_monthly: 'R$ 800 K',
  nnm_monthly_change: '9.3%',
  total_accumulated: 'R$ 1.4 B',
  nnm_chart_peak: 'R$ 13 M'
};

const topAdvisorsData = [
  { name: 'Fábio Garcia', contribution: 'R$ 12.8 M', percentage: '11%', imageSrc: '/advisor-images/fabio.png' },
  { name: 'Regina Melo', contribution: 'R$ 10.1 M', percentage: '7%', imageSrc: '/advisor-images/regina.png' },
  { name: 'Felipe Silva', contribution: 'R$ 9.6 M', percentage: '6%', imageSrc: '/advisor-images/felipe.png' },
  { name: 'Fernanda Borges', contribution: 'R$ 9.5 M', percentage: '6%', imageSrc: '/advisor-images/fernanda.png' },
  { name: 'Gustavo Santos', contribution: 'R$ 7 M', percentage: '5%', imageSrc: '/advisor-images/gustavo.png' },
];

// Custom dot bar chart component to match the image
const CustomBar = (props: any) => {
  const { x, y, width, height, value, label } = props;
  const numDots = value;
  const dots = [];
  const dotSize = 12; // Adjust size of dots
  const dotGap = 4; // Adjust gap between dots
  const startY = y + height - dotSize - dotGap;
  const startX = x + width / 2 - dotSize / 2;

  for (let i = 0; i < numDots; i++) {
    const dotY = startY - i * (dotSize + dotGap);
    dots.push(
      <circle key={i} cx={startX + dotSize/2} cy={dotY + dotSize/2} r={dotSize/2} fill="#6366F1" />
    );
  }

  return (
    <>
      {dots}
      {label && (
        <g>
          <rect x={x + width / 2 - 25} y={y - 20} width={50} height={20} rx={4} fill="#6366F1" opacity={0.1} />
          <Text
            x={x + width / 2}
            y={y - 10}
            fill="#FFF"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={12}
          >
            {label}
          </Text>
        </g>
      )}
    </>
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
            {/* Office View Main Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg dark:from-blue-600 dark:to-blue-700">
                <p className="text-sm opacity-90">NNM 2024</p>
                <p className="text-2xl font-bold">{metrics.nnm_2024}</p>
                <div className="flex items-center mt-2">
                  <span className="text-blue-200">↗ {metrics.nnm_2024_change}</span>
                </div>
                <p className="text-xs opacity-75">Essa semana</p>
              </div>
              <div className="bg-gray-800 text-white p-4 rounded-lg dark:bg-gray-800">
                <p className="text-sm opacity-90">NNM Semestral</p>
                <p className="text-2xl font-bold">{metrics.nnm_semester}</p>
                <div className="flex items-center mt-2">
                  <span className="text-red-300">● {metrics.nnm_semester_change}</span>
                </div>
                <p className="text-xs opacity-75">Desde o mês passado</p>
              </div>
              <div className="bg-green-600 text-white p-4 rounded-lg dark:bg-green-700">
                <p className="text-sm opacity-90">NNM Mensal</p>
                <p className="text-2xl font-bold">{metrics.nnm_monthly}</p>
                <div className="flex items-center mt-2">
                  <span className="text-green-300">● {metrics.nnm_monthly_change}</span>
                </div>
                <p className="text-xs opacity-75">Desde o ano passado</p>
              </div>
            </div>

            {/* Charts Section */}
            <div className="space-y-6">
              {/* Net New Money Chart */}
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Net New Money</h4>
                    <div className="flex gap-2 text-sm">
                      <span className="text-blue-600 font-medium dark:text-blue-500">2024</span>
                      <span className="text-gray-500 dark:text-gray-400">Semestral</span>
                      <span className="text-gray-500 dark:text-gray-400">Mensal</span>
                    </div>
                  </div>
                  <div className="text-right mb-2">
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-500">{metrics.nnm_chart_peak}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <XAxis 
                          dataKey="month" 
                          axisLine={false} 
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6B7280' }}
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
                </CardContent>
              </Card>

              {/* Total Acumulado */}
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Total Acumulado</h4>
                    <div className="text-right">
                      <p className="text-lg font-bold text-teal-600 dark:text-cyan-500">{metrics.total_accumulated}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      );
    } else { // 'advisors' view
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Henriques Performance */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mostrando dados de</p>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Henrique Lima Santos</h3>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="text-blue-600 font-medium dark:text-blue-500">2024</span>
                      <span>Semestral</span>
                      <span>Mensal</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Performance Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg dark:from-blue-600 dark:to-blue-700">
                    <p className="text-sm opacity-90">NNM 2024</p>
                    <p className="text-2xl font-bold">{advisorMetrics.nnm_2024}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-blue-200">↗ {advisorMetrics.nnm_2024_change}</span>
                    </div>
                    <p className="text-xs opacity-75">Desde ontem</p>
                  </div>
                  
                  <div className="bg-gray-800 text-white p-4 rounded-lg dark:bg-gray-800">
                    <p className="text-sm opacity-90">NNM Semestral</p>
                    <p className="text-2xl font-bold">{advisorMetrics.nnm_semester}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-red-300">● {advisorMetrics.nnm_semester_change}</span>
                    </div>
                    <p className="text-xs opacity-75">Desde o mês passado</p>
                  </div>
                  
                  <div className="bg-green-600 text-white p-4 rounded-lg dark:bg-green-700">
                    <p className="text-sm opacity-90">NNM Mensal</p>
                    <p className="text-2xl font-bold">{advisorMetrics.nnm_monthly}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-green-300">● {advisorMetrics.nnm_monthly_change}</span>
                    </div>
                    <p className="text-xs opacity-75">Desde o ano passado</p>
                  </div>
                </div>

                {/* Chart Section */}
                <div className="space-y-6">
                  {/* Net New Money Chart */}
                  <Card className="bg-white dark:bg-gray-800">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold">Net New Money</h4>
                        <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <span>Anual</span>
                          <span>Semestral</span>
                          <span className="text-blue-600 font-medium dark:text-blue-500">Mensal</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyData} margin={{ top: 20, bottom: 20, left: 10, right: 10 }}>
                          <XAxis 
                            dataKey="month" 
                            axisLine={false} 
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                          />
                          <YAxis 
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                            domain={[0, 15]}
                            ticks={[2.5, 5, 10, 15]}
                            tickFormatter={(value) => `R$ ${value} M`}
                            axisLine={false}
                            tickLine={false}
                          />
                          <Bar 
                            dataKey="value"
                            shape={<CustomBar />}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Total Acumulado */}
                  <Card className="bg-white dark:bg-gray-800">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold">Total Acumulado</h4>
                        <div className="text-right">
                          <p className="text-lg font-bold text-teal-600">{advisorMetrics.total_accumulated}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
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
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Top 5 Assessores */}
          <div className="lg:col-span-1">
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Top 5 Assessores</CardTitle>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Contribuição total</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">vs. último ano</p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm mt-2 text-gray-500 dark:text-gray-400">
                  <span>2024</span>
                  <span>Semestral</span>
                  <span className="text-blue-600 font-medium dark:text-blue-500">Mensal</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {topAdvisorsData.map((advisor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      {/* Usando o componente Image com a nova propriedade */}
                      <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                        <Image
                          src={advisor.imageSrc}
                          alt={`Foto de perfil de ${advisor.name}`}
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="text-sm font-medium dark:text-gray-200">{advisor.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold dark:text-gray-200">{advisor.contribution}</p>
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
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen dark:bg-gray-900">
      {/* Header Tabs */}
      <div className="bg-white rounded-lg shadow-sm dark:bg-gray-800">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button 
            onClick={() => setActiveTab('office')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'office' 
                ? 'text-white bg-blue-600 rounded-tl-lg border-b-2 border-blue-600 dark:bg-blue-700 dark:border-blue-700'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            Visão Escritório
          </button>
          <button 
            onClick={() => setActiveTab('advisors')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'advisors'
                ? 'text-white bg-blue-600 rounded-tr-lg border-b-2 border-blue-600 dark:bg-blue-700 dark:border-blue-700'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            Visão Assessores
          </button>
          <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            Visão Cliente
          </button>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}