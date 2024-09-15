"use client";

import { useEffect, useRef, useState } from "react";
import Play from "../../SVG/Play";
import styles from "./VideoButton.module.scss";

const VideoButton = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const handleFullScreen = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    addEventListener("fullscreenchange", handleFullScreen);

    return () => {
      removeEventListener("fullscreenchange", handleFullScreen);
    };
  }, []);

  useEffect(() => {
    if (!isFullScreen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isFullScreen]);

  return (
    <div className={styles.buttonBlock}>
      <div className={styles.text}>
        <p>Видео о проекте</p>
        <p className={styles.duration}>1:25 минут</p>
      </div>
      <div className={styles.line} />
      <video
        ref={videoRef}
        width="600"
        controls
        style={isFullScreen ? {} : { display: "none" }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <button className={styles.videoButton} onClick={handleFullScreen}>
        <Play />
        <p>Play</p>
      </button>
    </div>
  );
};

export default VideoButton;
