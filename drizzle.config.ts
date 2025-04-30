import 'dotenv/config'
import type { Config } from 'drizzle-kit'
import { parse } from 'pg-connection-string'

// Parse the connection string into individual components
const connectionOptions = parse(process.env.DATABASE_URL || '')

export default {
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: connectionOptions.host || 'localhost',
    port: connectionOptions.port ? parseInt(connectionOptions.port) : 5432,
    user: connectionOptions.user || undefined,
    password: connectionOptions.password || undefined,
    database: connectionOptions.database || 'postgres',
    ssl: connectionOptions.ssl ? true : undefined,
  },
} satisfies Config

/*
import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'postgres',
  },
})
*/
