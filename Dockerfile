# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using a lightweight server
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Copy built application and dependencies from builder
COPY --from=builder /app ./

# Expose the port that the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
