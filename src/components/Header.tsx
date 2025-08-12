'use client';

import { useState } from 'react';
import { Eye, EyeOff, Bell, Search } from 'lucide-react';

export function Header() {
  const [showBalance, setShowBalance] = useState(true);
  
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
          <div className="flex items-center space-x-2 text-gray-600">
            <span>Total Portfolio Value:</span>
            <div className="flex items-center">
              {showBalance ? (
                <span className="text-2xl font-bold text-green-600">$120,000</span>
              ) : (
                <span className="text-2xl font-bold text-gray-400">••••••</span>
              )}
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="ml-2 p-1 hover:bg-gray-100 rounded"
              >
                {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search investments..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
}