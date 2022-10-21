FROM node:16.14-alpine
COPY package.json .
RUN npm install
WORKDIR /app-frontend
COPY . .
ENTRYPOINT ["npm", "start"]