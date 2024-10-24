import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

const PRJ_ROOT = path.resolve(__dirname, '../');
const SRC_ROOT = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/entries',
  plugins: [react(), vanillaExtractPlugin()],
});
