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
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen dark:style={{ background: '#2D2D2D' }}">
      {/* Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white dark:from-blue-600 dark:to-blue-700">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium opacity-90">Receita bruta</h3>
            <p className="text-3xl font-bold">R$ 1.8 M</p>
            <div className="flex items-center mt-2">
              <span className="text-blue-200">↗ 17.5%</span>
            </div>
            <span className="text-xs opacity-75">Essa semana</span>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-white dark:bg-gray-800">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium opacity-90">Receita líquida</h3>
            <p className="text-3xl font-bold">R$ 1.7 M</p>
            <div className="flex items-center mt-2">
              <span className="text-red-300">● 17.5%</span>
            </div>
            <span className="text-xs opacity-75">Desde o mês passado</span>
          </CardContent>
        </Card>

        <Card className="bg-green-600 text-white dark:bg-green-700">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium opacity-90">Comissão total</h3>
            <p className="text-3xl font-bold">R$ 980 K</p>
            <div className="flex items-center mt-2">
              <span className="text-green-300">● 9.3%</span>
            </div>
            <span className="text-xs opacity-75">Desde o ano passado</span>
          </CardContent>
        </Card>
      </div>

      {/* Table Section */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Detalhes por assessor</CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">Assessores ativos</p>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:style={{ background: '#2D2D2D' }} dark:border-gray-700 w-64"
                />
              </div>
              <Button variant="default" className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                <Filter className="w-4 h-4" />
                Filtrar por Motivo
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Nome</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Receita Líquida</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Comissão Total</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Meta</th>
                </tr>
              </thead>
              <tbody>
                {commissionsData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:hover:style={{ background: '#2D2D2D' }}">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-medium text-sm">
                          {item.name.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-gray-100">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-900 dark:text-gray-100">{item.grossRevenue}</td>
                    <td className="py-4 px-4 text-gray-900 dark:text-gray-100">{item.totalCommission}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-gray-100">{item.totalCommission}</span>
                        <Badge 
                          variant={item.status === 'Cumprida' ? 'success' : 'danger'}
                          className="ml-2"
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mostrando assessores 1 ao 8 de 30
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="default" className="flex items-center">
                <ChevronLeft className="w-4 h-4 mr-1" />
              </Button>
              <Button variant="primary" className="bg-blue-600 text-white dark:bg-blue-700">1</Button>
              <Button variant="default">2</Button>
              <Button variant="default">3</Button>
              <Button variant="default">4</Button>
              <Button variant="default" className="flex items-center">
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}