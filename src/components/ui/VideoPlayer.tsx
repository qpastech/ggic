import React from "react";

interface VideoPlayerProps {
  src: string;
  type?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type = "video/mp4",
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  poster,
  className,
}) => {
  return (
    <div className="shadow-lg mx-auto rounded-xl w-full max-w-3xl overflow-hidden">
      <video
        className={`w-full h-auto ${className}`}
        src={src}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        muted={muted}
        poster={poster}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
