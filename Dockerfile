
ARG DATABASE_URL
ARG AUTH_SECRET
ARG AUTH_KEYCLOAK_ID
ARG AUTH_KEYCLOAK_SECRET
ARG AUTH_KEYCLOAK_ISSUER
ARG AUTH_TRUST_HOST

FROM node:lts AS build
ARG DATABASE_URL
ENV DATABASE_URL ${DATABASE_URL}
ARG AUTH_SECRET
ENV AUTH_SECRET ${AUTH_SECRET}
ARG AUTH_KEYCLOAK_ID
ENV AUTH_KEYCLOAK_ID ${AUTH_KEYCLOAK_ID}
ARG AUTH_KEYCLOAK_SECRET
ENV AUTH_KEYCLOAK_SECRET ${AUTH_KEYCLOAK_SECRET}
ARG AUTH_KEYCLOAK_ISSUER 
ENV AUTH_KEYCLOAK_ISSUER ${AUTH_KEYCLOAK_ISSUER}

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --omit=dev

FROM node:lts  
ARG DATABASE_URL
ENV DATABASE_URL ${DATABASE_URL}
ARG AUTH_SECRET
ENV AUTH_SECRET ${AUTH_SECRET}
ARG AUTH_KEYCLOAK_ID
ENV AUTH_KEYCLOAK_ID ${AUTH_KEYCLOAK_ID}
ARG AUTH_KEYCLOAK_SECRET
ENV AUTH_KEYCLOAK_SECRET ${AUTH_KEYCLOAK_SECRET}
ARG AUTH_KEYCLOAK_ISSUER 
ENV AUTH_KEYCLOAK_ISSUER ${AUTH_KEYCLOAK_ISSUER}
WORKDIR /app 

COPY --from=build /app/build ./build

COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app/package.json .

COPY --from=build /app/prisma .

CMD ["npm", "run", "start"]
