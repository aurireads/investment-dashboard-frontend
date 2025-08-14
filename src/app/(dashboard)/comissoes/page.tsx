'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const commissionsData = [
  {
    name: 'Jane Cooper',
    grossRevenue: 'R$ 47.079,23',
    totalCommission: 'R$ 100.075,23',
    status: 'Cumprida'
  },
  {
    name: 'Math Smith',
    grossRevenue: 'R$ 117.079,23',
    totalCommission: 'R$ 137.075,21',
    status: 'Cumprida'
  },
  {
    name: 'Philip Wade',
    grossRevenue: 'R$ 168.075,23',
    totalCommission: 'R$ 194.075,22',
    status: 'Cumprida'
  },
  {
    name: 'Tim Price',
    grossRevenue: 'R$ 224.075,23',
    totalCommission: 'R$ 194.075,24',
    status: 'Não atingiu'
  },
  {
    name: 'Carol Stevens',
    grossRevenue: 'R$ 263.075,23',
    totalCommission: 'R$ 194.075,27',
    status: 'Não atingiu'
  },
  {
    name: 'Amelia Parker',
    grossRevenue: 'R$ 111.078,23',
    totalCommission: 'R$ 12.075,23',
    status: 'Cumprida'
  },
  {
    name: "Michael O'leary",
    grossRevenue: 'R$ 167.078,23',
    totalCommission: 'R$ 12.075,23',
    status: 'Cumprida'
  },
  {
    name: 'Owen Tomsson',
    grossRevenue: 'R$ 66.075,23',
    totalCommission: 'R$ 00.075,23',
    status: 'Não atingiu'
  },
];

export default function CommissionsPage() {
  return (
    <div className="p-6 min-h-screen" style={{ backgroundColor: '#2d2d2d' }}>
      {/* Top Navigation */}
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span>Modo escuro</span>
          <div className="w-8 h-4 bg-gray-600 rounded-full relative">
            <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-0.5 right-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Receita bruta card */}
        <div className="p-4 rounded-lg" style={{ background: 'linear-gradient(135deg, #6b46c1 0%, #06b6d4 100%)' }}>
          <div className="text-white">
            <div className="text-sm opacity-90 mb-1">Receita bruta</div>
            <div className="text-2xl font-bold mb-1">R$ 1.8 M</div>
            <div className="text-xs opacity-80 mb-2">Essa semana</div>
            <div className="flex items-center text-xs">
              <span className="text-green-300">↗ 17.5%</span>
            </div>
          </div>
        </div>

        {/* Receita líquida card */}
        <div className="p-4 rounded-lg" style={{ backgroundColor: '#404040' }}>
          <div className="text-white">
            <div className="text-sm opacity-90 mb-1">Receita líquida</div>
            <div className="text-2xl font-bold mb-1">R$ 1.7 M</div>
            <div className="text-xs opacity-80 mb-2">Desde o mês passado</div>
            <div className="flex items-center text-xs">
              <span className="text-red-400">↘ 17.5%</span>
            </div>
          </div>
        </div>

        {/* Comissão total card */}
        <div className="p-4 rounded-lg" style={{ backgroundColor: '#404040' }}>
          <div className="text-white">
            <div className="text-sm opacity-90 mb-1">Comissão total</div>
            <div className="text-2xl font-bold mb-1">R$ 980 K</div>
            <div className="text-xs opacity-80 mb-2">Desde o ano passado</div>
            <div className="flex items-center text-xs">
              <span className="text-green-400">↗ 9.3%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div>
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-white text-lg font-medium mb-1">Detalhes por assessor</h2>
          <p className="text-sm text-gray-400">Assessores ativos</p>
        </div>

        {/* Search and Filter */}
        <div className="flex justify-between items-center mb-6">
          <div></div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar"
                className="pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-white w-64"
                style={{ backgroundColor: '#404040' }}
              />
            </div>
            <Button className="flex items-center gap-2 bg-gray-600 text-white hover:bg-gray-500 border-gray-600 px-4 py-2 rounded-lg">
              <Filter className="w-4 h-4" />
              Filtrar por Motivo
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-3 px-4 font-medium text-gray-300">Nome</th>
                <th className="text-left py-3 px-4 font-medium text-gray-300">Receita Líquida</th>
                <th className="text-left py-3 px-4 font-medium text-gray-300">Comissão Total</th>
                <th className="text-left py-3 px-4 font-medium text-gray-300">Meta</th>
              </tr>
            </thead>
            <tbody>
              {commissionsData.map((item, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {item.name.charAt(0)}
                      </div>
                      <span className="text-white">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{item.grossRevenue}</td>
                  <td className="py-4 px-4 text-green-400">{item.totalCommission}</td>
                  <td className="py-4 px-4">
                    <Badge 
                      className={`px-3 py-1 rounded-full text-xs ${
                        item.status === 'Cumprida' 
                          ? 'bg-green-700 text-green-200' 
                          : 'bg-red-700 text-red-200'
                      }`}
                    >
                      {item.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pt-4">
          <p className="text-sm text-gray-400">
            Mostrando assessores 1 ao 8 de 30
          </p>
          <div className="flex items-center space-x-1">
            <Button className="p-2 bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600 rounded">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button className="px-3 py-1 bg-gray-600 text-white border-gray-600 rounded">1</Button>
            <Button className="px-3 py-1 bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600 rounded">2</Button>
            <Button className="px-3 py-1 bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600 rounded">3</Button>
            <Button className="px-3 py-1 bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600 rounded">4</Button>
            <Button className="p-2 bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600 rounded">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}