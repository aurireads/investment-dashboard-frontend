'use client';

import React from 'react';
import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';

// Interface para StatsCard
interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

// Stats Card Component
export const StatsCard = ({ title, value, change, icon: Icon, trend }: StatsCardProps) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        <div className={`flex items-center mt-2 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          <span className="text-sm font-medium ml-1">{change}</span>
        </div>
      </div>
      <div className={`p-3 rounded-full ${trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
        <Icon className={`w-6 h-6 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
      </div>
    </div>
  </div>
);

// Interface para Holdings
interface Holding {
  symbol: string;
  name: string;
  value: number;
  change: number;
  shares: number;
}

interface HoldingsTableProps {
  holdings: Holding[];
}

// Holdings Table Component
export const HoldingsTable = ({ holdings }: HoldingsTableProps) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">Top Holdings</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {holdings.map((holding, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div>
                  <div className="text-sm font-medium text-gray-900">{holding.symbol}</div>
                  <div className="text-sm text-gray-500">{holding.name}</div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{holding.shares}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">R$ {holding.value.toLocaleString()}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center text-sm font-medium ${
                  holding.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {holding.change >= 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                  {Math.abs(holding.change)}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);