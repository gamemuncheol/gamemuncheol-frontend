'use client';
import { useEffect, useState } from 'react';

const Background = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, [hasWindow]);

  return (
    <>
      {hasWindow && (
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            position: 'fixed',
          }}
          src={require('../../../../public/login/loginbg.mp4')}
        />
      )}
    </>
  );
};

export default Background;
