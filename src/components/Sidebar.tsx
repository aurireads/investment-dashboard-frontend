'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  PieChart, 
  TrendingUp,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Net New Money', href: '/net-new-money', icon: TrendingUp },
  { name: 'Custódia', href: '/custodia', icon: PieChart },
  { name: 'Receitas', href: '/receitas', icon: DollarSign },
  { name: 'Comissões', href: '/comissoes', icon: Users },
];

const settings = [
  { name: 'Configurações', href: '/configuracoes', icon: Settings },
  { name: 'Ajuda', href: '/ajuda', icon: HelpCircle },
  { name: 'Sair', href: '/auth/login', icon: LogOut },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`text-white transition-all duration-300 flex flex-col ${
      isCollapsed ? 'w-16' : 'w-64'
    }`} style={{ background: '#2D2D2D' }}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <Image
                  src="/icon.png" // O caminho correto deve começar com '/'
                  alt="Banking logo"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
              <span className="text-lg font-semibold">Banking</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>
        {!isCollapsed && (
          <div className="mt-2 flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-xs text-gray-400">Modo escuro</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          {!isCollapsed && 'Menu principal'}
        </div>
        
        {navigation.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== '/dashboard' && pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <item.icon className={`flex-shrink-0 w-5 h-5 ${
                isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
              }`} />
              {!isCollapsed && (
                <span className="ml-3 truncate">{item.name}</span>
              )}
              {isActive && !isCollapsed && (
                <div className="absolute right-2 w-2 h-2 bg-white rounded-full"></div>
              )}
              {isCollapsed && (
                <div className="absolute left-16 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap shadow-lg border border-gray-700">
                  {item.name}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="px-4 py-4 border-t border-gray-700 space-y-2">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          {!isCollapsed && 'Ajustes'}
        </div>
        
        {settings.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex items-center px-3 py-3 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-gray-800 transition-all duration-200 relative"
          >
            <item.icon className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-white" />
            {!isCollapsed && (
              <span className="ml-3 truncate">{item.name}</span>
            )}
            {isCollapsed && (
              <div className="absolute left-16 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap shadow-lg border border-gray-700">
                {item.name}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}