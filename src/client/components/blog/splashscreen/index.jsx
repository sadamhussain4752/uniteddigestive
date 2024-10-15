import React, { useEffect, useRef } from "react";

const SplashScreen = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.muted = false;
          await audioRef.current.play();
          console.log("Audio started playing");
        }
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };
    playAudio();
  }, []);

  return (
    <div className="splash-screen">
      <div className="logo-container">
        <img
          src="/assets/img/banner/logo-reserve.gif"
          alt="Splash Logo"
          className="logo-image"
          style={{ width: '100%', height: 'auto' }}
        />
        <audio ref={audioRef} >
          <source src="/assets/img/banner/audio.mp3" type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  );
};

export default SplashScreen;
