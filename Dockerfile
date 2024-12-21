# Stage 1: Build React frontend
FROM oven/bun:1 AS base

WORKDIR /app/frontend
COPY frontend ./
RUN bun install
RUN bun run build

# Stage 2: Build and serve backend with Bun
FROM oven/bun:1 AS server

WORKDIR /app
COPY backend/package.json ./
RUN bun install

# Copy backend source code
COPY backend ./

# Copy React build files to backend folder
COPY --from=base /app/frontend/build ./frontend/build

# Serve using Bun
CMD ["bun", "run", "index.ts"]