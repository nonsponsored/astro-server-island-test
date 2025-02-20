# Astro Server Island Test

This code tests a basic Astro Server Island, in conjuction with the Netlify and Node adapters.

## Issue

When using the Netlify adapter and setting `output: 'static'`, the content doesn't update on page refresh. With `output: 'hybrid'` no longer being valid, seems like  needs to be supported. The Node adapter works as intended with `output: 'static'`.

**Update 2025-02-20:** Issue still replicable in Astro 5.3.0 and @astrojs/netlify 6.2.0.

## Setup

`yarn install`

You'll need to have the Netlify CLI installed so that you're able to test that environment locally.

Note that `@astrojs/internal-helpers` had to be installed seperately to be able to test the Node adapter locally, as there's a version mismatch.

## Test Node Adapter

1. Run `yarn build`
2. Run `node dist/server/entry.mjs`
3. View `http://localhost:4321` to see the current time
4. Refresh browser to see current time updated
 
## Text Netlify Adapter

1. In `astronomy.config.mjs`, comment out Node adapter, and uncomment Netlify adapter
2. Run `yarn build`
3. Run `netlify serve` (need Netlify CLI installed)
4. View `http://localhost:8888` and no time will be displayed, but there will be two 404 errors