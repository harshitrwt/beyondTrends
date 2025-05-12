import { useEffect, useState } from 'react';
import { ArrowRightCircle } from 'lucide-react';

// Interface for the article
interface Article {
  title: string;
  url: string;
  publishedAt: string;
  description: string;
  urlToImage: string;
}

// Default image for articles that don't have a valid image
const defaultImage = 'https://via.placeholder.com/600x400?text=Tech+Article';

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // NewsAPI key (replace with your actual API key)
  const API_KEY = 'YOUR_NEWSAPI_KEY';
  const PAGE_SIZE = 10; // Number of articles per page

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=technology&apiKey=${API_KEY}&page=${page}&pageSize=${PAGE_SIZE}`
      );
      const data = await res.json();

      const articlesData = data.articles.map((article: any) => ({
        title: article.title,
        url: article.url,
        publishedAt: article.publishedAt,
        description: article.description,
        urlToImage: article.urlToImage || defaultImage, // Fallback image
      }));

      setArticles((prev) => [...prev, ...articlesData]);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="min-h-screen bg-[#000007] text-white flex flex-col items-center p-6 relative">
      <div className="flex justify-between items-center w-full mb-6 md:w-[1200px] md:text-3xl font-semibold">
        <h1 className="text-3xl font-bold text-purple-600">Beyond Trends Articles</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-gray-400 text-sm">{new Date(article.publishedAt).toDateString()}</p>
            <p className="text-gray-300 text-sm mt-2">{article.description}</p>
          </a>
        ))}
      </div>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={loading}
        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
      >
        {loading ? 'Loading...' : 'Load More'}
      </button>

      <div className="absolute bottom-6 right-6">
        <ArrowRightCircle
          onClick={() => (window.location.href = '/')}
          className="w-10 h-10 text-purple-600 cursor-pointer hover:text-purple-500 transition duration-300"
        />
      </div>
    </div>
  );
};

export default ArticlesPage;
