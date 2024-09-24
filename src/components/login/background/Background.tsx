const Background = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        preload="auto"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          position: 'fixed',
        }}
      >
        <source src="/login/loginbg.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Background;
