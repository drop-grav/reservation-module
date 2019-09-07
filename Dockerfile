FROM node:latest
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
EXPOSE 3002
RUN npm install
CMD ["npm", "start"]
