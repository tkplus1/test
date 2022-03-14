/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config

},
distDir: 'build',
}

typescript: {
ignoreBuildErrors: true
ignoreDevErrors: true
}

module.exports = nextConfig
