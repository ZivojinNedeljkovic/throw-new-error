// https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts

/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setup-tests.ts'],
    testMatch: ['./tests/**/*.test.tsx'],
    globals: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
})
