/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: `/pl`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
