# personal-portfolio
Welcome to my portfolio! Here, you'll find a collection of my work, where I blend my love for coding with my varied interests. Explore my projects and follow along as I continue to innovate and create in the world of technology!

## Deploying to GitHub Pages

1. Make sure your `next.config.mjs` contains:
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     basePath: '/personal-portfolio',
     assetPrefix: '/personal-portfolio/',
   };
   export default nextConfig;
   ```
2. Build and export the site:
   ```sh
   npm run build && npx next export -o docs
   ```
3. Commit and push the `docs` folder to your repository.
4. In your repository settings, set GitHub Pages to serve from the `/docs` folder.
5. Visit your site at `https://<your-username>.github.io/personal-portfolio/`.