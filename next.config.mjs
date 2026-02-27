import withBundleAnalyzer from '@next/bundle-analyzer'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const isUserSiteDeploy = process.env.DEPLOY_TARGET === 'user-site'

const nextConfig = {
  output: 'export',
  basePath: isUserSiteDeploy ? '/NextMe_crx' : undefined,
  assetPrefix: isUserSiteDeploy ? '/NextMe_crx/' : undefined,
  images: {
    unoptimized: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  staticPageGenerationTimeout: 120,
  transpilePackages: ['next-mdx-remote'],
}

export default bundleAnalyzer(nextConfig)
