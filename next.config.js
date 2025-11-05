// /** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'

// const nextConfig = {
  // output: 'export',
  // basePath: isProd ? '/portfolio2' : '',
  // assetPrefix: isProd ? '/portfolio2/' : '',
//   images: {
//     unoptimized: true,
//   },
// }

// module.exports = nextConfig



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: { unoptimized: true },
//   basePath: '/portfolio2',
//   assetPrefix: '/portfolio2/',
//   trailingSlash: true,
// };

// module.exports = nextConfig;

module.exports = { images: { unoptimized: false } }