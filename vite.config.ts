import MillionLint from '@million/lint'
import path from 'path'
import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
const _plugins = [react()]
_plugins.unshift(MillionLint.vite() as PluginOption[])
export default defineConfig({
  plugins: _plugins,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
