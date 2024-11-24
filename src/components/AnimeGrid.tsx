import React from 'react';

const animeList = [
  {
    id: 1,
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80",
    rating: "4.9",
    episodes: "87"
  },
  {
    id: 2,
    title: "My Hero Academia",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80",
    rating: "4.8",
    episodes: "113"
  },
  {
    id: 3,
    title: "One Punch Man",
    image: "https://images.unsplash.com/photo-1626548307930-deac221f87d9?auto=format&fit=crop&q=80",
    rating: "4.7",
    episodes: "24"
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&q=80",
    rating: "4.9",
    episodes: "34"
  }
];

export default function AnimeGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-white mb-6">Trending Now</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animeList.map((anime) => (
          <div key={anime.id} className="group relative">
            <div className="aspect-w-2 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src={anime.image}
                alt={anime.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-semibold text-white">{anime.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>⭐ {anime.rating}</span>
                <span>{anime.episodes} Episodes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}