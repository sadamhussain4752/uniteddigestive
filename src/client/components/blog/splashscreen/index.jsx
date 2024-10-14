import React, { useEffect, useRef } from "react";

const SplashScreen = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to play the video
      const playVideo = async () => {
        try {
          videoRef.current.muted = false; // Unmute the video
          await videoRef.current.play(); // Play the video
        } catch (error) {
          console.error("Error playing video:", error);
        }
      };

      // Unmute and play the video after a short delay
      const timeoutId = setTimeout(() => {
        playVideo();
      }, 4000); // 1 second delay (optional)

      return () => clearTimeout(timeoutId); // Cleanup on unmount
    }
  }, []);

  return (
    <div className="splash-screen">
      <div className="logo-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted // Start muted to comply with autoplay policies
          className="logo-image"
        >
          <source src="/assets/img/banner/logo-reserve.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <audio autoPlay>
        <source src="/assets/img/banner/audio.mp3" type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
};

export default SplashScreen;
