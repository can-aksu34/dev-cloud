FROM node:18 as builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/angular-frontend /usr/share/nginx/html
