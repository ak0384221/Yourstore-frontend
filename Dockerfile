FROM node:22-alpine AS builder

WORKDIR /app

ENV CI=true

ARG INTERNAL_API_URL
ENV INTERNAL_API_URL=$INTERNAL_API_URL


COPY package.json pnpm-*.yaml /app/

RUN npm install -g pnpm@11.24.0

RUN pnpm install --frozen-lockfile

COPY . .


RUN pnpm run build



FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/standalone ./

COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD [ "node","server.js" ]