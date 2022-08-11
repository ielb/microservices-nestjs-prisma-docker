FROM node:latest as build

RUN apt-get update && apt-get install -y  openssl 


WORKDIR /usr/src/api-gateway

COPY  package*.json ./

COPY  tsconfig*.json ./

RUN npm ci  
COPY  . .


FROM  node:latest

WORKDIR /usr/src/api-gateway

COPY --from=build /usr/src/api-gateway .


RUN npm run build



EXPOSE 3030

CMD [  "npm", "run", "start:dev" ]