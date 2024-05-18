FROM node:lts as build

WORKDIR /frontend

#RUN npm config rm proxy
#RUN npm config rm https-proxy

#RUN npm install -g yarn

#RUN npm config set registry https://registry.npmjs.org/

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm i --omit=dev

# Copy app source code
COPY . /frontend

# Build the app
RUN npm run build

# Use Nginx to serve the build files
FROM nginx:alpine
#COPY --from=build /frontend/build /usr/share/nginx/html
COPY --from=build /frontend/build /var/www/reedtzdev/frontend
