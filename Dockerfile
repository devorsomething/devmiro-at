FROM node:22-alpine

WORKDIR /app

# Cache bust - always rebuild when this file changes
ARG CACHE_BUST=20260401_2
ENV CACHE_BUST=${CACHE_BUST}

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps
RUN npm install -g serve

# Copy source (excluding .next and node_modules)
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 3000

# Start
CMD ["serve", "-s", "out", "-p", "3000"]