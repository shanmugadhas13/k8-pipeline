FROM node:13-alpine
RUN mkdir -p /home/app
COPY srv.js /home/app
WORKDIR /home/app
RUN npm install
CMD ["node", "srv.js"]
