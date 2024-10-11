import React, { useEffect } from "react";

const SplashScreen = () => {
  useEffect(() => {
    const videoElement = document.querySelector("video");
    const audioElement = document.getElementById("audio");

    // Try playing the video and audio after the component mounts
    videoElement.play().catch(error => {
      console.log("Video autoplay was prevented:", error);
    });

    audioElement.play().catch(error => {
      console.log("Audio autoplay was prevented:", error);
    });
  }, []);

  return (
    <div className="splash-screen">
      <div className="logo-container">
<<<<<<< HEAD
        <video
          width="320"
          height="240"
          autoPlay
          muted
          onError={(e) => console.log("Video failed to load", e)}
        >
          <source src="/assets/img/bg/splshscreen.mp4" type="video/mp4" />
          <source src="/assets/img/bg/splshscreen.mp4" type="video/ogg" />
          {/* Your browser does not support the video tag. */}
        </video>

        <audio id="audio">
          <source src="/assets/audio/onload-sound.mp3" type="audio/ogg" />
          <source src="/assets/audio/onload-sound.mp3" type="audio/mpeg" />
          {/* Your browser does not support the audio element. */}
        </audio>
=======
        <img
          src="/assets/img/banner/logo gif_3_1.gif" // Replace with your image path
          alt="Logo"
          className="logo-image"
        />
>>>>>>> 003ee5728c2b22029472df403d328d20f5940f7c
      </div>
    </div>
  );
};

export default SplashScreen;
