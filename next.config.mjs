import { withNextVideo } from 'next-video/process';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'gamemuncheol-s3.s3.ap-southeast-2.amazonaws.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default withNextVideo(nextConfig);
