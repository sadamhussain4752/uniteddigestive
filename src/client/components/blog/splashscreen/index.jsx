import React, { useEffect } from "react";
import useSound from "use-sound";  // Import the use-sound hook

const SplashScreen = () => {
  // Load the sound file using the use-sound hook
  const [play] = useSound('/assets/img/banner/audio.mp3');

  useEffect(() => {
    const playAudio = async () => {
      try {
        await play();  // Play the audio automatically when the component mounts
        console.log("Audio started playing");
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };

    // Auto-play after component mounts
    playAudio();
  }, [play]);

  return (
    <div className="splash-container">
      <div className="splash-logo-wrapper">
        {/* GIF logo display */}
        <img
          src="/assets/img/banner/logo-reserve.gif"
          alt="Splash Logo"
          className="splash-logo"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
