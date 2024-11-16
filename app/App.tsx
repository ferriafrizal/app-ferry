import { useState, useEffect } from 'react';

interface Anime {
  id: number;
  title: string;
  description: string;
  image: string;
}

const animeList: Anime[] = [
  { id: 1, title: 'Naruto', description: 'Anime tentang ninja', image: 'https://example.com/naruto.jpg' },
  { id: 2, title: 'One Piece', description: 'Anime tentang bajak laut', image: 'https://example.com/one-piece.jpg' },
  { id: 3, title: 'Attack on Titan', description: 'Anime tentang manusia melawan titan', image: 'https://example.com/aot.jpg' },
];

const App = () => {
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAnimeList = animeList.filter((anime) => anime.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900">Nonton Anime</h1>
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Cari anime"
        className="w-full py-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredAnimeList.map((anime) => (
          <div key={anime.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={anime.image} alt={anime.title} className="w-full h-64 object-cover rounded-lg" />
            <h2 className="text-lg font-bold text-gray-900 mt-2">{anime.title}</h2>
            <p className="text-sm text-gray-700">{anime.description}</p>
            <button
              onClick={() => setSelectedAnime(anime)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-2"
            >
              Nonton
            </button>
          </div>
        ))}
      </div>
      {selectedAnime && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-4 w-1/2">
            <h2 className="text-lg font-bold text-gray-900">{selectedAnime.title}</h2>
            <video
              src={`https://example.com/${selectedAnime.id}.mp4`}
              controls
              className="w-full h-64 object-cover rounded-lg"
            />
            <button
              onClick={() => setSelectedAnime(null)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-2"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;