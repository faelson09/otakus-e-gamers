/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.waifu.pics",
        port: "",
        //pathname: "/account123/**",
      },
    ],
  },
};
