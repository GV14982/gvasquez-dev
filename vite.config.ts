import { defineConfig } from "vite";
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [mdPlugin({
    mode: [Mode.HTML]
  })],
})
