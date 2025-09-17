import React from "react";
import VideoPlayer from "./VideoPlayer";

interface BackgroundVideoProps {
  src: string;
  type?: string;
  overlayColor?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  type = "video/mp4",
  overlayColor = "rgba(0,0,0,0.4)",
  children,
  childrenClassName,
}) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoPlayer
        className="top-0 left-0 absolute w-full h-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        type={type}
      />

      <div
        className="top-0 left-0 absolute w-full h-full"
        style={{ backgroundColor: overlayColor }}
      />

      <div className={`z-10 relative  ${childrenClassName}`}>{children}</div>
    </div>
  );
};

export default BackgroundVideo;
