import React, { useState, useEffect } from 'react';
import { CornerUpLeft, SquarePen } from 'lucide-react';
import StarField from '../components/StarField';

const VideoPage: React.FC = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [videos, setVideos] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; videoId: string; thumbnail: string } | null>(null);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  // YouTube API Key (replace with your API key)
  const API_KEY = 'YOUR_YOUTUBE_API_KEY';

  // Fetching tech-related videos using YouTube API
  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=tech%20innovation&key=${API_KEY}&maxResults=6`
      );
      const data = await response.json();
      const techVideos = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high?.url || 'https://via.placeholder.com/150',
      }));
      setVideos(techVideos);
    };

    fetchVideos();
  }, []);

  const handleLoadMore = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=tech%20innovation&key=${API_KEY}&maxResults=6&pageToken=YOUR_NEXT_PAGE_TOKEN`
    );
    const data = await response.json();
    const techVideos = data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high?.url || 'https://via.placeholder.com/150',
    }));
    setVideos((prev) => [...prev, ...techVideos]);
  };

  const openVideoModal = (videoId: string, title: string, thumbnail: string) => {
    setSelectedVideo({ videoId, title, thumbnail });
    setShowModal(true);
  };

  const closeVideoModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#000007] text-white flex flex-col items-center p-6 relative">
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <StarField />
      </div>

      {/* Title and Filter Section */}
      <div className="flex justify-between items-center w-full mb-10 md:w-[1200px] md:mb-24 md:mt-5">
        <h1 className="text-3xl font-bold text-purple-600">Beyond Trends Tech Videos</h1>

        {/* Filter Button and Options */}
        <div className="relative">
          <SquarePen
            onClick={() => setShowFilterOptions(prev => !prev)}  
            className="w-10 h-10 text-purple-600 cursor-pointer hover:text-purple-500 transition duration-300"
          />
          <div className={`absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-xl z-10 overflow-hidden ${showFilterOptions ? '' : 'hidden'}`}>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition duration-300">
              Last 7 Days
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition duration-300">
              Last 15 Days
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition duration-300">
              Last 30 Days
            </button>
            <button
              onClick={handleLoadMore}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition duration-300"
            >
              Load More
            </button>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-black shadow-md shadow-purple-600 rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => openVideoModal(video.id, video.title, video.thumbnail)}
          >
            <img src={video.thumbnail} alt={video.title} className="w-full h-auto rounded-lg mb-4" />
            <h2 className="text-lg font-semibold">{video.title}</h2>

            {/* Bookmark Icon (Visible only if signed up) */}
            <button
              className={`mt-3 w-full text-center py-2 border rounded-md ${isSignedUp ? 'bg-purple-600 text-black' : 'bg-gray-600 text-white'} disabled:opacity-50`}
              disabled={!isSignedUp}
            >
              {isSignedUp ? 'Add to Bookmark' : 'Sign Up to Bookmark'}
            </button>
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

      {/* Modal for Video */}
      {showModal && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-20">
          <div className="relative bg-black border-4 border-purple-600 p-6 rounded-lg w-full max-w-4xl">
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 text-white text-xl font-bold"
            >
              X
            </button>
            <h2 className="text-2xl text-white mb-4">{selectedVideo.title}</h2>
            <div className="relative pb-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
            <img
              src={selectedVideo.thumbnail || 'https://via.placeholder.com/150'}
              alt={selectedVideo.title}
              className="absolute inset-0 w-full h-full opacity-30 rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
