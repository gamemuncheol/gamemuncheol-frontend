'use client';
import { useEffect, useState } from 'react';

const Background = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && (
        <video
          autoPlay
          muted
          loop
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            position: 'fixed',
          }}
          src={'/login/loginbg.mp4'}
        />
      )}
    </>
  );
};

export default Background;
