# Awesome-MERN
A curated list of awesome things related to MERN


# MERN Stack Setup Guide

This guide will walk you through setting up a MERN (MongoDB, Express.js, React.js, Node.js) stack step by step.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

## Step 1: Setup MongoDB

1. Install MongoDB on your system.
2. Start MongoDB service.

## Step 2: Setup Node.js and Express.js Backend

1. Create a new directory for your project.
2. Navigate into the directory: `cd your-project-name`.
3. Initialize a new Node.js project: `npm init -y`.
4. Install Express.js and other dependencies: `npm install express mongoose`.
5. Create your Express.js server file (`server.js` or `app.js`) and set up your server.

## Step 3: Setup React.js Frontend

1. Inside your project directory, navigate to the client directory: `cd client`.
2. Initialize a new React.js project: `npx create-react-app .` (Note the dot at the end).
3. Delete unnecessary files in the `src` directory (e.g., `App.test.js`, `logo.svg`).
4. Set up your React components and views.

## Step 4: Connect Backend with Frontend

1. In your Express.js server, set up API routes to interact with MongoDB using Mongoose.
2. In your React.js frontend, make API calls to your Express.js server using `fetch` or libraries like Axios.
3. Ensure CORS is enabled in your Express.js server to allow cross-origin requests from the React.js frontend.

## Step 5: Start the Development Servers

1. Start the MongoDB service if not already running.
2. Start the Express.js server: `node server.js` or `npm start`.
3. Start the React.js development server: `npm start` (inside the `client` directory).

## Step 6: Build and Deploy

1. Optimize your React.js app for production: `npm run build` (inside the `client` directory).
2. Serve the production build using Express.js or deploy it to platforms like Heroku, Netlify, or Vercel.

## Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React.js Documentation](https://reactjs.org/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

