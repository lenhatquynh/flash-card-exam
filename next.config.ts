import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Prisma and the pg driver must not be bundled by Turbopack/webpack.
  serverExternalPackages: ['@prisma/client', 'pg', '@prisma/adapter-pg'],
}

export default nextConfig
