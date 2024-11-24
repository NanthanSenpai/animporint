import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-orange-500 font-bold text-2xl">aaaat</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Browse</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Manga</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">News</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Premium</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <User className="h-5 w-5" />
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}