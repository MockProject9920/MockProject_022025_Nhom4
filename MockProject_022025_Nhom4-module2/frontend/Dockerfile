# Build React app
FROM node:18 as build-stage
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Dùng Nginx để chạy React
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
