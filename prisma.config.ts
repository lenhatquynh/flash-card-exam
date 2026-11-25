import 'dotenv/config'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // Not `env('DATABASE_URL')`: every Prisma CLI command loads this file,
    // and `env()` throws when the variable is missing — which would break
    // `prisma generate` on CI, where no database URL is needed.
    url: process.env.DATABASE_URL ?? '',
  },
})
