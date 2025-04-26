# Use Node.js as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g nodemon

# Copy the rest of the application
COPY . .

# Expose the port the server runs on
EXPOSE 5000

# Start the server
CMD ["nodemon", "server.js"]
