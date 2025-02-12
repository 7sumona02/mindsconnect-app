// components/VideoComp.tsx
import React from 'react';

interface VideoCompProps {
  videoId: string;
}

const VideoComp: React.FC<VideoCompProps> = ({ videoId }) => {
  return (
    <div className="w-full">
      <iframe
        className="flex justify-center w-[300px] -mt-20 rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        title="YouTube Video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComp;