/** @type {import('next').NextConfig} */
// https://avatar.iran.liara.run/public/boy)
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
    ],
  },
  
  reactCompiler: true,
};

export default nextConfig;
