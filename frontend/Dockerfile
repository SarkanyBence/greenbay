FROM node:16-alpine3.13
WORKDIR /app
ARG REACT_APP_BACKEND_URL=https://tsavorite-greenbay-backend.herokuapp.com
COPY package.json ./
RUN yarn install --production
RUN npm i --save-dev @types/validator
COPY . .
RUN yarn build
RUN npm i -g serve
CMD ["serve", "build"]
