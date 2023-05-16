FROM node:alpine

RUN mkdir -p /home/blog-frontend

COPY ./ /home/blog-frontend

COPY .env /home/blog-frontend/.env

WORKDIR /home/blog-frontend

RUN npm install

CMD ["npm", "start"]