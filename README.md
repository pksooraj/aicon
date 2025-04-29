# Aicon Tech Website

This is a static HTML/CSS/JS website for Aicon Tech, a company providing digital solutions for small businesses.

## Project Structure

The website consists of multiple HTML pages with associated CSS and JavaScript files:

- `index.html` - Home page
- `services.html` - Services offered
- `portfolio.html` - Portfolio showcase
- `profile.html` - Company profile
- `blog.html` - Blog posts
- `testimonials.html` - Client testimonials
- `contact.html` - Contact information

## Setup Instructions

### Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Production Deployment

1. Install dependencies:
   ```
   npm install --production
   ```

2. Start the server:
   ```
   npm start
   ```

## Hosting Options

### Option 1: Traditional Web Hosting

You can upload the static files to any web hosting service that supports HTML/CSS/JS websites.

1. Upload all files except `server.js`, `package.json`, and `node_modules/` to your web hosting service.
2. Configure your domain to point to the uploaded files.

### Option 2: Node.js Hosting

You can deploy this website to platforms that support Node.js applications:

1. Deploy the entire project directory to your hosting platform.
2. Configure the platform to run `npm start` to start the server.
3. Set up your domain to point to the deployed application.

### Option 3: Static Site Hosting

You can use services like GitHub Pages, Netlify, or Vercel to host this website:

1. Create a repository and push all the static files (HTML, CSS, JS, images).
2. Configure the hosting service to deploy from your repository.
3. Set up your custom domain if needed.

## Notes

- This is a static website and does not require a database or backend processing.
- The Express server is included for convenience in local development and simple hosting options.
- All navigation links are relative and should work correctly regardless of the hosting method used.