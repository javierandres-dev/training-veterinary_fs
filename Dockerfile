FROM node:12-alpine
WORKDIR /home/node/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]
