/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lift-s3-bucket.s3.ap-northeast-2.amazonaws.com"],
  },
};

export default nextConfig;
