FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && \
    npm cache clean --force 

COPY . .

RUN npx prisma generate

RUN npm run build

CMD ["npm", "run", "start"]
