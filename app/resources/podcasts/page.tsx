'use client';

import { useEffect, useState, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchVideos } from '@/lib/youtube';
import localFont from 'next/font/local';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

// Define the types for the video data structure
interface VideoSnippet {
  title: string;
}

interface VideoId {
  videoId: string;
}

interface Video {
  id: VideoId;
  snippet: VideoSnippet;
}

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]); // Store displayed videos
  const [allVideos, setAllVideos] = useState<Video[]>([]); // Store ALL fetched videos
  const [pageToken, setPageToken] = useState<string>(''); // Store the next page token
  const [hasMore, setHasMore] = useState<boolean>(true); // Track if there are more videos to load
  const [searchQuery, setSearchQuery] = useState<string>(''); // Search query state

  // useCallback to memoize the fetchVideos function
  const memoizedFetchVideos = useCallback(async (token?: string) => {
    return await fetchVideos(token);
  }, []);

  // Fetch initial videos
  useEffect(() => {
    const loadInitialVideos = async () => {
      const data = await memoizedFetchVideos();
      setAllVideos(data.items); // Store all fetched videos
      setVideos(data.items); // Initialize displayed videos with initial data
      setPageToken(data.nextPageToken);
    };

    loadInitialVideos();
  }, [memoizedFetchVideos]);

  // Fetch more videos when user scrolls
  const fetchMoreVideos = useCallback(async () => {
    if (!pageToken) {
      setHasMore(false);
      return;
    }

    const data = await memoizedFetchVideos(pageToken);
    setAllVideos((prevVideos) => [...prevVideos, ...data.items]); // Append to allVideos
    setVideos((prevVideos) => [...prevVideos, ...data.items]); // Append to displayed videos
    setPageToken(data.nextPageToken);

    if (!data.nextPageToken) {
      setHasMore(false);
    }
  }, [pageToken, memoizedFetchVideos]);

  // Function to handle search input changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter ALL videos based on the search query
    const filteredVideos = allVideos.filter((video) =>
      video.snippet.title.toLowerCase().includes(query.toLowerCase())
    );

    setVideos(filteredVideos); // Update displayed videos with filtered results
  };

  return (
    <>
      <div
        className={`h-full w-screen justify-center flex flex-col items-center text-center md:px-10 pb-20 ${f1.className}`}
      >
        <div className="pb-20 pt-20 px-10 text-black relative">
          <h2 className="text-3xl font-semibold mb-6">
            Watch <span className={`${f2.className}`}>podcasts</span>
          </h2>
          {/* Add search bar */}
          <div className="w-full max-w-xl mx-auto">
            <div className="relative flex flex-col justify-start items-center min-h-[90px]">
              <div className="w-full max-w-sm sticky top-0 z-10 pt-4 pb-1">
                <Input
                  type="text"
                  placeholder="Search Podcasts..."
                  className="pl-3 pr-9 py-1.5 h-9 text-sm rounded-md bg-[#ebffa5] border-none shadow-none focus-visible:ring-offset-0"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <div className="absolute right-3 top-1/2 -translate-y-0.5 h-4 w-4">
                  <Search className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>
          </div>
          <InfiniteScroll
            dataLength={videos.length} // Current number of displayed videos
            next={fetchMoreVideos} // Load more videos
            hasMore={hasMore} // Check if there are more videos to load
            loader={<h4>Loading...</h4>} // Loading message
            endMessage={<p>No more videos to load.</p>} // End of videos message
          >
            <div className="grid grid-cols-1 text-left md:grid-cols-3 gap-10 mt-14">
              {videos.map((video) => (
                <div key={video.id.videoId} className="bg-[#E4D9CEff] p-4 rounded-md">
                  <iframe
                    className="md:w-[24vw] md:h-[20vh] rounded-md"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="max-w-xs whitespace-normal">
                    <h3 className={`${f2.className} text-lg font-bold pt-4`}>
                      {video.snippet.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}