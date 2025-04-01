// App.tsx
import { useEffect, useState } from 'react';
import { Filter } from 'lucide-react'; // Import the filter icon
import StarField from '../components/StarField';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  updated_at: string;
}

const technologies = ['react', 'nextjs', 'java', 'python', 'vue', 'angular'];

export function RepoPage() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string>('react'); // Default filter

  const fetchRepos = async (pageNumber: number, tech: string) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=topic:${tech}+stars:>500+stars:<2000&sort=updated&order=desc&per_page=10&page=${pageNumber}`
      );

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      setRepos((prevRepos) => [...prevRepos, ...data.items]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true); // Set loading to true when filter changes
    setRepos([]); // Clear previous repos
    fetchRepos(page, filter);
  }, [page, filter]);

  const handleLoadMore = () => {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilterChange = (tech: string) => {
    setFilter(tech);
    setPage(1); // Reset to first page when filter changes
  };

  if (loading && page === 1) return (
    <div className="text-center p-8 text-lg text-gray-400">
      Loading repositories...
    </div>
  );

  if (error) return (
    <div className="text-center p-8 text-lg text-red-400">
      Error: {error}
    </div>
  );

  return (
    <div className="bg-black min-h-screen p-8 font-sans">
        <div className="absolute inset-0 z-[2] pointer-events-none">
                        <StarField />
                    </div>
      <h1 className="text-4xl text-center text-purple-400 mb-8 font-semibold">
        Quality Repositories
      </h1>

      <div className="flex justify-center mb-6 ">
        <div className="relative">
          <Filter className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-2 pl-8 pr-4 focus:outline-none"
          >
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-[1200px] w-full mx-auto">
        {repos.map((repo) => (
          <div 
            key={repo.id}
            className="border border-gray-700 rounded-lg p-6 bg-[#000007] shadow-lg shadow-purple-500 transition-shadow"
          >
            <h3 className="text-xl font-medium mb-4">
              <a 
                href={repo.html_url}
                className="text-purple-300 hover:text-purple-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </a>
            </h3>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {repo.description || 'No description available'}
            </p>

            <div className="flex justify-between text-sm text-gray-400">
              <span className="flex items-center gap-1">
                ⭐ {repo.stargazers_count.toLocaleString()}
              </span>
              <span>
                Updated: {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button 
          onClick={handleLoadMore}
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default RepoPage;
