// @ts-check
import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import node from "@astrojs/node";

export default defineConfig({
    // adapter: netlify(),
    adapter: node({ mode: 'standalone' }),
    output: 'static'
});
