'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, Text } from 'recharts';
import { Button } from '@/components/ui/button';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const dotChartData = [
  { month: 'Jan', value: 28, label: '' },
  { month: 'Fev', value: 32, label: '' },
  { month: 'Mar', value: 30, label: '' },
  { month: 'Abr', value: 25, label: '' },
  { month: 'Mai', value: 38, label: '' },
  { month: 'Jun', value: 40, label: 'R$ 33 M' },
  { month: 'Jul', value: 35, label: '' },
  { month: 'Ago', value: 32, label: '' },
  { month: 'Set', value: 30, label: '' },
  { month: 'Out', value: 28, label: '' },
  { month: 'Nov', value: 22, label: '' },
  { month: 'Dez', value: 26, label: '' },
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
  nnm_chart_peak: 'R$ 13 M'
};

const topAdvisorsData = [
  { name: 'Fábio Garcia', contribution: 'R$ 12.8 M', percentage: '8%', imageSrc: '/advisor-images/fabio.png' },
  { name: 'Regina Melo', contribution: 'R$ 10.1 M', percentage: '7%', imageSrc: '/advisor-images/regina.png' },
  { name: 'Felipe Silva', contribution: 'R$ 9.6 M', percentage: '6%', imageSrc: '/advisor-images/felipe.png' },
  { name: 'Fernanda Borges', contribution: 'R$ 9.5 M', percentage: '6%', imageSrc: '/advisor-images/fernanda.png' },
  { name: 'Gustavo Santos', contribution: 'R$ 7 M', percentage: '5%', imageSrc: '/advisor-images/gustavo.png' },
];

// COMPONENTE MODIFICADO - AQUI ESTÁ O GRÁFICO
const CustomBar = (props: any) => {
  const { x, y, width, height, value, label } = props;
  const dots = [];
  const dotSize = 3;
  const dotGap = 0.5;
  const dotsPerRow = 6; // 6 dots por linha para ficar mais compacto como na imagem
  const rowGap = 0.5;

  const totalRows = Math.ceil(value / dotsPerRow);
  const totalDotsHeight = totalRows * (dotSize + rowGap) - rowGap;
  
  // Começar do fundo para cima
  const startY = y + height - totalDotsHeight;
  const startX = x + width / 2 - (dotsPerRow * (dotSize + dotGap) - dotGap) / 2;

  // Criar as bolinhas empilhadas de baixo para cima
  for (let i = 0; i < value; i++) {
    const row = Math.floor(i / dotsPerRow);
    const col = i % dotsPerRow;
    const dotX = startX + col * (dotSize + dotGap);
    const dotY = startY + (totalRows - 1 - row) * (dotSize + rowGap);

    dots.push(
      <circle
        key={i}
        cx={dotX + dotSize / 2}
        cy={dotY + dotSize / 2}
        r={dotSize / 2}
        fill="#6366F1"
      />
    );
  }

  return (
    <>
      {dots}
      {label && (
        <g>
          <rect
            x={x + width / 2 - 25}
            y={y - 35}
            width={50}
            height={18}
            rx={9}
            fill="#4A5568"
          />
          <polygon
            points={`${x + width / 2 - 4},${y - 17} ${x + width / 2 + 4},${y - 17} ${x + width / 2},${y - 12}`}
            fill="#4A5568"
          />
          <text
            x={x + width / 2}
            y={y - 26}
            fill="#FFF"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="10"
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
    <text x={x - 8} y={y + 3} fill="#9CA3AF" fontSize="11" textAnchor="end">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <img
                src="/nnm.png"
                alt="Dashboard de métricas Net New Money para a visão de escritório, incluindo cartões de métricas e gráficos."
                className="w-full h-auto"
              />
              <img
                src="/semestral.png"
                alt="Dashboard de métricas Net New Money para a visão de escritório, incluindo cartões de métricas e gráficos."
                className="w-full h-auto"
              />
              <img
                src="/mensal.png"
                alt="Dashboard de métricas Net New Money para a visão de escritório, incluindo cartões de métricas e gráficos."
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <Card style={{ backgroundColor: '#2D2D2D' }}>
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-100">Net New Money</h4>
                    <div className="flex gap-2 text-sm">
                      <span className=" font-medium ">2024</span>
                      <span className="text-gray-400" >Semestral</span>
                      <span className="text-gray-400">Mensal</span>
                    </div>
                  </div>
                  <div className="text-right mb-2">
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-500"></p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dotChartData} margin={{ top: 40, bottom: 20, left: 70, right: 10 }}>
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6B7280' }}
                        />
                        <YAxis
                          type="number"
                          domain={[0, 40]}
                          ticks={[10, 20, 30, 40]}
                          interval={0}
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
                      <img src="total.png" />
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
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Seção Top 5 Assessores */}
          <Card style={{ backgroundColor: '#3A3A3A' }} className="border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg font-semibold text-gray-100">Top 5 Assessores</CardTitle>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Nome</span>
                <div className="flex gap-4">
                  <span>Contribuição total</span>
                  <span>% do total</span>
                </div>
              </div>
              <div className="flex gap-4 text-sm text-gray-400 border-b border-gray-600 pb-2">
                <span>2024</span>
                <span>Semestral</span>
                <span className="font-medium">Mensal</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {topAdvisorsData.map((advisor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full  flex items-center justify-center text-white font-semibold text-xs">
                      {index + 1}
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src={advisor.imageSrc}
                        alt={`Foto de perfil de ${advisor.name}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-sm text-gray-200">{advisor.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <span className="text-sm font-semibold text-gray-200">{advisor.contribution}</span>
                    <span className="text-xs text-gray-400 min-w-[20px]">{advisor.percentage}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Header com nome do assessor */}
          <div className="mb-4">
            <p className="text-sm text-gray-400">Mostrando dados de</p>
            <h3 className="text-xl font-semibold text-gray-100">Henrique Lima Santos</h3>
          </div>

          {/* Cards de métricas em linha */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* NNM 2024 */}
              <CardContent className="p-4">
<img src="/henrique1.png"  />

              </CardContent>
            

            {/* NNM Semestral */}
              <CardContent className="p-4">
<img src="/henrique2.png"  />

              </CardContent>
            

            {/* NNM Mensal */}
              <CardContent className="p-4">
<img src="/henrique3.png"  />

              </CardContent>
          </div>

          {/* Gráfico Net New Money */}
          <Card style={{ backgroundColor: '#3A3A3A' }} className="border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-gray-100">Net New Money</h4>
                <div className="flex gap-4 text-sm text-gray-400">
                  <span>Anual</span>
                  <span>Semestral</span>
                  <span className="font-medium">Mensal</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dotChartData} margin={{ top: 40, bottom: 20, left: 70, right: 10 }}>
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                    />
                    <YAxis
                      type="number"
                      domain={[0, 40]}
                      ticks={[10, 20, 30, 40]}
                      interval={0}
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

          {/* Gráfico Total Acumulado */}
          <Card style={{ backgroundColor: '#3A3A3A' }} className="border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-gray-100">Total Acumulado</h4>
                <div className="text-right">
<img src="/total.png"/>
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
      );
    }
  };

  return (
    <div className="space-y-6 p-6 min-h-screen" style={{ backgroundColor: '#2D2D2D' }}>
      <div className="rounded-lg shadow-sm" style={{ backgroundColor: '#2D2D2D' }}>
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => setActiveTab('office')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'office'
              ? 'text-white rounded-tl-lg border-b-2'
              : 'text-gray-400 hover:text-gray-200'
              }`}
          >
            Visão Escritório
          </button>
          <button
            onClick={() => setActiveTab('advisors')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'advisors'
              ? 'text-white rounded-tr-lg border-b-2'
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