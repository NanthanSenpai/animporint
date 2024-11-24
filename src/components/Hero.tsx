import React from 'react';
import { Play, Info } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80"
          alt="Hero anime"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Demon Slayer
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Follow Tanjiro's epic journey as he seeks to turn his sister back into a human and avenge his family. Watch as he masters the art of demon slaying in this breathtaking series.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition">
              <Play className="h-5 w-5 mr-2" />
              Watch Now
            </button>
            <button className="flex items-center px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg font-semibold transition">
              <Info className="h-5 w-5 mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}