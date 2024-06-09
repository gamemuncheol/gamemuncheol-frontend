import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ytimg.com', 'gamemuncheol-s3.s3.ap-southeast-2.amazonaws.com'],
  },
};

export default withNextVideo(nextConfig);