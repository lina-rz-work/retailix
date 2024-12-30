FROM node:23.5.0-bookworm

RUN mkdir -p /app

COPY package.json /app

WORKDIR /app

RUN yarn global add typescript && \
    yarn install && \
    yarn install --prefix client

COPY . /app

RUN yarn run build --prefix client

WORKDIR /app/client

RUN tsc

WORKDIR /app

ENTRYPOINT [""]
