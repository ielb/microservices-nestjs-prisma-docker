FROM node:latest as build

RUN apt-get update && apt-get install -y  openssl 

WORKDIR /usr/src/user-svc

COPY  package*.json ./
COPY  prisma ./prisma/
COPY  tsconfig*.json ./

RUN npm ci 
COPY . .

RUN npm run prisma:generate
FROM node:latest

WORKDIR /usr/src/user-svc

COPY --from=build /usr/src/user-svc .

RUN npm run build


EXPOSE 3031

CMD [  "npm", "run", "start:migrate:prod" ]
RUN npm run build
