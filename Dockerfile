FROM node:lts as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:lts  

WORKDIR /app 

COPY --from=builder /app/build .

COPY --from=builder /app/package.json .

RUN npm install --omit-dev

CMD ["node", "index.js"]
