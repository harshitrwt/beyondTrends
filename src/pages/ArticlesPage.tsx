import { useEffect, useState } from 'react';
import { ArrowRightCircle } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  url: string;
  time: number;
  imageUrl: string;
}

const defaultImage = 'https://via.placeholder.com/600x400?text=Tech+Article';

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      const ids: number[] = await res.json();
      const topIds = ids.slice((page - 1) * 10, page * 10);
      const articlesData = await Promise.all(
        topIds.map(async (id) => {
          const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          const data = await res.json();
          // Fetch image from Unsplash based on the article title
          const imageRes = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
              data.title
            )}&client_id=YOUR_UNSPLASH_ACCESS_KEY`
          );
          const imageData = await imageRes.json();
          const imageUrl = imageData.results[0]?.urls?.regular || defaultImage;
          return {
            id: data.id,
            title: data.title,
            url: data.url,
            time: data.time,
            imageUrl,
          };
        })
      );
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
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-gray-400 text-sm">
              {new Date(article.time * 1000).toDateString()}
            </p>
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

