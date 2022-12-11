ARG DATABASE_URL
FROM node:lts AS build
ARG DATABASE_URL
ENV DATABASE_URL ${DATABASE_URL}

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --omit=dev

FROM node:lts  
ARG DATABASE_URL
ENV DATABASE_URL ${DATABASE_URL}
RUN echo ${DATABASE_URL}
WORKDIR /app 

COPY --from=build /app/build ./build

COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app/package.json .

COPY --from=build /app/prisma .

CMD ["npm", "run", "start"]
