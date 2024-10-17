import React, { useRef, useState } from "react";

const SplashScreen = () => {
  const audioRef = useRef(null);
  const [showButtons, setShowButtons] = useState(true); // Show Yes/No buttons initially

  const handleYesClick = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.muted = false; // Unmute the audio
        await audioRef.current.play();  // Play the audio
        setShowButtons(false); // Hide the buttons after selecting Yes
        console.log("Audio started playing");
      }
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const handleNoClick = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Stop the audio
      setShowButtons(false); // Hide the buttons after selecting No
      console.log("Audio stopped");
    }
  };

  return (
    <div
      className="splash-screen"
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }} // Use full viewport height
    >
      <div className="logo-container">
        {/* GIF image */}
        <img
          src="/assets/img/banner/logo-reserve.gif"
          alt="Splash Logo"
          className="logo-image"
          style={{ width: "100%", height: "auto" }}
        />

        {/* Audio element */}
        <audio ref={audioRef} loop>
          <source src="/assets/img/banner/audio.mp3" type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div>

      {/* Bottom-left pop-up */}
      <div
        className="bottom-left-popup"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#FFF", // Semi-transparent background
          color: "#000", // White text color
          padding: "10px 20px",
          borderRadius: "5px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          zIndex: 10, // Ensure it appears on top
          maxWidth:"20%"
        }}
      >
        Welcome to our website! Would you like to play the background music?

        {/* Yes/No buttons */}
        {showButtons && (
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={handleYesClick}
              style={{
                marginRight: "10px",
                padding: "5px 15px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "3px",
              }}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              style={{
                padding: "5px 15px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "3px",
              }}
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
