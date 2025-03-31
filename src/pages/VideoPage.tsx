import React, { useState } from 'react';
import { CornerUpLeft, SquarePen } from 'lucide-react';
import StarField from '../components/StarField';

const VideoPage: React.FC = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'AI Revolution in Tech', image: 'https://elroy.twit.tv/sites/default/files/images/episodes/2023/11/848976/hero/tnw0311_thumbnail_v2.jpg', date: '2025-03-30' },
    { id: 2, title: 'Quantum Computing Breakthrough', image: 'https://elroy.twit.tv/sites/default/files/images/episodes/2023/11/848976/hero/tnw0311_thumbnail_v2.jpg', date: '2025-03-29' },
    { id: 3, title: 'Blockchain Trends', image: 'https://elroy.twit.tv/sites/default/files/images/episodes/2023/11/848976/hero/tnw0311_thumbnail_v2.jpg', date: '2025-03-28' },
  ]);
  const [filterLatest, setFilterLatest] = useState(true);
  const [filterDays, setFilterDays] = useState<number | null>(null);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const handleFilter = (days: number | null) => {
    setFilterDays(days);
    setShowFilterOptions(false);
    let filteredArticles = [...articles];

    if (days) {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - days);
      filteredArticles = filteredArticles.filter(article => new Date(article.date) >= cutoffDate);
    }

    setArticles(prev =>
      [...filteredArticles].sort((a, b) =>
        filterLatest ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    );
  };

  const handleLoadMore = () => {
    const moreArticles = [
      { id: 4, title: 'Cybersecurity Innovations', image: 'https://elroy.twit.tv/sites/default/files/images/episodes/2023/11/848976/hero/tnw0311_thumbnail_v2.jpg', date: '2025-03-27' },
      { id: 5, title: 'Space Tech Advancements', image: 'https://elroy.twit.tv/sites/default/files/images/episodes/2023/11/848976/hero/tnw0311_thumbnail_v2.jpg', date: '2025-03-26' },
    ];
    setArticles((prev) => [...prev, ...moreArticles]);
  };

  return (
    <div className="min-h-screen bg-[#000007] text-white flex flex-col items-center p-6 relative">
      <div className="absolute inset-0 z-[2] pointer-events-none">
                        <StarField />
                    </div>
      {/* Title and Filter Section */}
      <div className="flex justify-between items-center w-full mb-10 md:w-[1200px] md:mb-24 md:mt-5">
        <h1 className="text-3xl font-bold text-purple-600">Beyond Trends Videos</h1>


        {/* Filter Button and Options */}
        <div className="relative">
          
          <SquarePen
          onClick={() => setShowFilterOptions(!showFilterOptions)}
          className="w-10 h-10 text-purple-600 cursor-pointer hover:text-purple-500 transition duration-300"
        />
          <div className={`absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-xl z-10 overflow-hidden ${showFilterOptions ? '' : 'hidden'}`}>
            <button
              onClick={() => handleFilter(7)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition duration-300"
            >
              Last 7 Days
            </button>
            <button
              onClick={() => handleFilter(15)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition duration-300"
            >
              Last 15 Days
            </button>
            <button
              onClick={() => handleFilter(30)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition duration-300"
            >
              Last 30 Days
            </button>
            <button
              onClick={() => handleFilter(null)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition duration-300"
            >
              All Time
            </button>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
        {articles.map((article) => (
          <div key={article.id} className="bg-black shadow-md shadow-purple-600 rounded-lg p-4 transition-transform transform hover:scale-105">
            <img src={article.image} alt={article.title} className="w-full h-auto rounded-lg mb-4" />
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-gray-400 text-sm">{new Date(article.date).toDateString()}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <button
        onClick={handleLoadMore}
        className="mt-6 px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Load More
      </button>

      {/* Circular Arrow Icon */}
      <div className="absolute bottom-6 right-6">
        <CornerUpLeft
          onClick={() => window.location.href = '/'}
          className="w-10 h-10 text-purple-600 cursor-pointer hover:text-purple-500 transition duration-300"
        />
      </div>
    </div>
  );
};

export default VideoPage;

// import { useEffect, useState } from 'react';
// import { ArrowRightCircle } from 'lucide-react';

// const getImage = (url: string): string => `https://image.thum.io/get/width/600/crop/500/noanimate/${url}`;

// const VideoPage = () => {
//   interface Article {
//     id: number;
//     title: string;
//     url: string;
//     time: number;
//   }
  
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [showFilterOptions, setShowFilterOptions] = useState(false);

//   useEffect(() => {
//     fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
//       .then((res) => res.json())
//       .then((ids) => {
//         const top10 = ids.slice(0, 10);
//         return Promise.all(
//           top10.map((id: number) =>
//             fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json())
//           )
//         );
//       })
//       .then((articlesData) => {
//         setArticles(articlesData);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#000007] text-white flex flex-col items-center p-6 relative">
//       <div className="flex justify-between items-center w-full mb-6 md:w-[1200px] md:text-3xl font-semibold">
//         <h1 className="text-3xl font-bold text-purple-600 ">Beyond Trends Videos</h1>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
//         {articles.map((article) => (
//           <a 
//             key={article.id} 
//             href={article.url} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="bg-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105"
//           >
//             <img 
//               src={getImage(article.url)} 
//               alt={article.title} 
//               className="w-full h-40 object-cover rounded-lg mb-4"
//             />
//             <h2 className="text-lg font-semibold">{article.title}</h2>
//             <p className="text-gray-400 text-sm">{new Date(article.time * 1000).toDateString()}</p>
//           </a>
//         ))}
//       </div>

//       <div className="absolute bottom-6 right-6">
//         <ArrowRightCircle
//           onClick={() => window.location.href = '/'}
//           className="w-10 h-10 text-purple-600 cursor-pointer hover:text-purple-500 transition duration-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default VideoPage;



