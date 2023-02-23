import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    environment: 'happy-dom',
    transformMode: {
      web: [/.[jt]sx?/],
    },
    threads: false,
    isolate: false,
    setupFiles: ['setupVitest.js'],
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
