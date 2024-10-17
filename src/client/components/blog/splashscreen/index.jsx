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
      {showButtons ?  <div
        className="bottom-left-popup"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(25px)",
          color: "black",
          padding: "10px 20px",
          borderRadius: "5px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          zIndex: 10, // Ensure it appears on top
          // maxWidth: "20%"
        }}
      >
        {/* Welcome to our website! Would you like to play the background music? */}

        <h3 className="text-center">
          Disclaimer
        </h3>

        Welcome to United Gut Health Care, led by Dr. Shabeer Ahmed and his team. The information provided on this website (www.drshabeerahmed.com) is for general informational purposes only and should not be considered medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment of any medical condition. We strive to keep the information on our site up-to-date, but we make no warranties regarding the accuracy or completeness of the content. <br />

        <p className="mt-4 fw-bold ps-3">
          By proceeding, you acknowledge that you have read and understood this disclaimer. Do you agree?</p>

        {/* Yes/No buttons */}
        {showButtons && (
          <div className="d-flex justify-content-between" style={{ marginTop: "10px" }}>
            <button
              onClick={handleYesClick}
              className="d-block mx-auto"
              style={{
                marginRight: "10px",
                padding: "5px 15px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "3px",
              }}
            >
              {/* <i class="fa-solid fa-volume-high"></i> */}

              I Agree

            </button>
            {/* <button
              onClick={handleNoClick}
              style={{
                padding: "5px 15px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "3px",
              }}
            > */}
            {/* <i class="fa-solid fa-volume-xmark"></i>
            </button> */}
          </div>
        )}
      </div> : null}
     
    </div >
  );
};

export default SplashScreen;
