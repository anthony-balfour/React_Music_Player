# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app
COPY . .

# Build the React app for production
RUN npm run build

# Serve the app with a web server (example: serve)
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the container port (optional)
EXPOSE 3000