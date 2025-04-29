# Etapa de construcción
FROM oven/bun:latest AS build
RUN bun upgrade
WORKDIR /app
COPY package*.json ./
RUN bun install

COPY . .
RUN bun run build

# Etapa de producción
FROM nginx:stable-alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]