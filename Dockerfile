FROM node:25-alpine3.22

# Create and switch to /app (recommended instead of ./src)
WORKDIR /app

# Copy package files first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app source code
COPY . .

# Expose port
EXPOSE 3002

# Start the app
CMD ["npm", "run", "start"]
