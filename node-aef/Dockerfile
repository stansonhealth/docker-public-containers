FROM node:6.3

RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y ruby-compass vim-tiny && gem install bootstrap-sass

ADD package.json /usr/src/package.json
ADD typings.json /usr/src/typings.json
RUN cd /usr/src && npm install && npm run postinstall

EXPOSE 3000
CMD cd /opt/app && npm start
