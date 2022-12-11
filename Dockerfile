FROM node:lts AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --omit=dev

FROM node:lts  

WORKDIR /app 

COPY --from=build /app/build ./build

COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app/package.json .

CMD ["node", "build"]
