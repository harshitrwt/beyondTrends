import { useEffect, useState } from 'react';
import { ArrowRightCircle } from 'lucide-react';

const getImage = (url: string): string => `https://image.thum.io/get/width/600/crop/500/noanimate/${url}`;

const ArticlesPage = () => {
  interface Article {
    id: number;
    title: string;
    url: string;
    time: number;
  }
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => res.json())
      .then((ids) => {
        const top10 = ids.slice(0, 10);
        return Promise.all(
          top10.map((id: number) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json())
          )
        );
      })
      .then((articlesData) => {
        setArticles(articlesData);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#000007] text-white flex flex-col items-center p-6 relative">
      <div className="flex justify-between items-center w-full mb-6 md:w-[1200px] md:text-3xl font-semibold">
        <h1 className="text-3xl font-bold text-purple-600 ">Beyond Trends Videos</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
        {articles.map((article) => (
          <a 
            key={article.id} 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <img 
              src={getImage(article.url)} 
              alt={article.title} 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-gray-400 text-sm">{new Date(article.time * 1000).toDateString()}</p>
          </a>
        ))}
      </div>

      <div className="absolute bottom-6 right-6">
        <ArrowRightCircle
          onClick={() => window.location.href = '/'}
          className="w-10 h-10 text-purple-600 cursor-pointer hover:text-purple-500 transition duration-300"
        />
      </div>
    </div>
  );
};

export default ArticlesPage;