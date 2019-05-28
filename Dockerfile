FROM node:11 as builder

WORKDIR /build

ADD . /build
RUN npm install -g grunt && \
    npm install && \
    npm run build

FROM nginx:stable-alpine
COPY cicd/nginx/default.conf /etc/nginx/conf.d/default.conf
RUN rm -rfv /usr/share/nginx/html/*
COPY --from=builder /build/build /usr/share/nginx/html/
