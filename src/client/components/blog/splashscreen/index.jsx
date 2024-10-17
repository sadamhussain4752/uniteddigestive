import React, { useRef, useState } from "react";

const SplashScreen = ({ allowvideo }) => {
  const videoRef = useRef(null);
  const [showButtons, setShowButtons] = useState(true); // Show Yes/No buttons initially

  const handleYesClick = async () => {
    try {
      if (videoRef.current) {
        videoRef.current.muted = false; // Unmute the video
        await videoRef.current.play();  // Play the video
        setShowButtons(false); // Hide the buttons after selecting Yes
        console.log("Video started playing");
        allowvideo(true);
      }
    } catch (error) {
      console.error("Error playing video:", error);
    }
  };

  const handleNoClick = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Stop the video
      setShowButtons(false); // Hide the buttons after selecting No
      console.log("Video stopped");
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
        {/* Video element */}
        <video
          ref={videoRef}
          src="/assets/img/banner/logo-reserve.mp4"
          className="logo-image"
          style={{ width: "100%", height: "auto" }}
          muted // Keep the video muted initially
          loop // Loop the video
        />

      </div>

      {/* Bottom-left pop-up */}
      {showButtons && (
        <div
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
          }}
        >
          <h3 className="text-center">Disclaimer</h3>

          Welcome to United Gut Health Care, led by Dr. Shabeer Ahmed and his team. The information provided on this website (www.drshabeerahmed.com) is for general informational purposes only and should not be considered medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment of any medical condition. We strive to keep the information on our site up-to-date, but we make no warranties regarding the accuracy or completeness of the content. <br />

          <p className="mt-4 fw-bold ps-3">
            By proceeding, you acknowledge that you have read and understood this disclaimer. Do you agree?
          </p>

          {/* Yes/No buttons */}
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
              I Agree
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
