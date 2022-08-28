FROM node:16

WORKDIR /app

COPY . .
RUN yarn install --production=true --frozen-lockfile

ENV NODE_ENV=production

RUN yarn build

EXPOSE 1337

ENV NODE_ENV=production
ENV STRAPI_LOG_LEVEL=debug

CMD ["yarn", "start"]