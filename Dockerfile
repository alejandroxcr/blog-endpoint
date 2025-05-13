# Stage 1: Build the Typescript code 
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
ENV NODE_ENV=production
RUN npm run build:prod

# Stage 2: Production-ready container
FROM node:20-alpine

WORKDIR /app

# Copy only the compiled JS code and necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

#Install only production dependencies
RUN npm install --only=production
COPY --from=builder /app/.prod.env ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node","dist/index.js"]