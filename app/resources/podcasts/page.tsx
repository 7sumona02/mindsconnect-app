'use client'
import { useEffect, useState } from 'react';
import { fetchVideos } from '@/lib/youtube';
import localFont from 'next/font/local';

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
  const [videos, setVideos] = useState<Video[]>([]); // Specify the type of videos as an array of Video objects

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchVideos();
      setVideos(data);
    };
    getVideos();
  }, []);

  return (
    <>
      <div
        className={`h-full w-screen justify-center flex flex-col items-center text-center md:px-10  pb-20 ${f1.className}`}
      >
        <div className="pb-20 pt-20 px-10 text-black relative">
          <h2 className="text-3xl font-semibold mb-6">
            Watch <span className={`${f2.className}`}>podcasts</span>
          </h2>
          <div className="grid grid-cols-1 text-left md:grid-cols-3 gap-10 mt-14">
        {videos.map((video) => (
          <div key={video.id.videoId} className='bg-[#E4D9CEff] p-4 rounded-md'>
            {/* <h2>{video.snippet.title}</h2> */}
            <iframe
            className='md:w-[24vw] md:h-[20vh] rounded-md'
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className='max-w-xs whitespace-normal'>
                  <h3 className={`${f2.className}  text-lg font-bold pt-4`}>
                    {video.snippet.title}
                  </h3>
                  {/* <p className="mt-2">{therapy.description}</p>
                  <div className='mt-2'>
                    <a href="#">
                        Read more →
                    </a>
                  </div> */}
                </div>
          </div>
        ))}

      </div>
    </div>
    </div>
      </>
  );
}
