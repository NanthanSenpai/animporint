import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimeGrid from './components/AnimeGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <AnimeGrid />
        
        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Action', 'Romance', 'Comedy', 'Fantasy'].map((category) => (
              <button
                key={category}
                className="p-4 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Premium Banner */}
        <section className="bg-gradient-to-r from-orange-500 to-pink-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Upgrade to Premium
              </h2>
              <p className="text-white/90 mb-6">
                Watch ad-free, enjoy exclusive anime, and get early access to new episodes!
              </p>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition">
                Try Free for 14 Days
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/90 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Browse</a></li>
                <li><a href="#" className="hover:text-white">Manga</a></li>
                <li><a href="#" className="hover:text-white">News</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Account</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Profile</a></li>
                <li><a href="#" className="hover:text-white">Premium</a></li>
                <li><a href="#" className="hover:text-white">Settings</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 aaaat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;