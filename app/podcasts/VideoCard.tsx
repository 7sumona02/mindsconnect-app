import { Clock, Play } from "lucide-react";
import VideoComp from "./VideoComp";

interface VideoCardProps {
  videoId: string;
  title: string;
  duration: string; // You can use a string like "45 min" or a number if you want to handle the format elsewhere
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, duration }) => {
  return (
    <div className="flex justify-center flex-col items-center border-2 border-neutral-400 rounded-lg shadow-md w-[320px] h-[250px] p-2 hover:scale-105 transition-all duration-300 relative bg-white">
      <VideoComp videoId={videoId} />
      <div className="absolute top-[24vh] left-2">
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-sm font-semibold text-neutral-500 flex items-center gap-2">
          <Clock className="size-4" />
          {duration}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;