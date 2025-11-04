// /** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'

// const nextConfig = {
//   output: 'export',
//   basePath: isProd ? '/portfolio' : '',
//   assetPrefix: isProd ? '/portfolio/' : '',
//   images: {
//     unoptimized: true,
//   },
// }

// module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: { unoptimized: true },
//   basePath: '/portfolio',
//   assetPrefix: '/portfolio/',
//   trailingSlash: true,
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
};

module.exports = nextConfig;
