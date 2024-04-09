const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="src/assets/videos/loginbg.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
