FROM node:20 as base
WORKDIR /usr/src/app
COPY package*.json .
RUN npm i

FROM base as development 
COPY . .
CMD ["npm","run","dev"]

FROM base as production 
COPY . .
CMD ["npm","start"]

# multisatge build