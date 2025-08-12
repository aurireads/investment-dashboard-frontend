'use client';

import { useState } from 'react';
import { DollarSign, Briefcase, TrendingUp, Plus, Menu } from 'lucide-react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const menuItems = [
    { icon: DollarSign, label: 'Overview', active: true },
    { icon: Briefcase, label: 'Portfolio' },
    { icon: TrendingUp, label: 'Analytics' },
    { icon: Plus, label: 'Invest' },
  ];

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-gray-900">InvestPro</h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
              item.active ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''
            }`}
          >
            <item.icon className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
}