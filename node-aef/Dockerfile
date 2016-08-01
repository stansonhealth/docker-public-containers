FROM node:6.3

RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y ruby-compass vim-tiny && gem install bootstrap-sass

ADD package.json /usr/src/package.json
ADD typings.json /usr/src/typings.json
# WTF is root/.config? yeoman creates it in the user's dir, then changes
# away from the user. So even though it is run as root (on docker) it
# then wanders away and can't read its own file. Boo.
#RUN rm -rf /root/.config/ && cd /usr/src && npm install -g --color=false --spin=false --progress=false --loglevel=warn && npm run postinstall --color=false --spin=false --progress=false --loglevel=warn

# gotta install typings first (yeah, wtf)
RUN cd /usr/src && npm install typings -g --color=false --spin=false --progress=false --loglevel=warn --unsafe-perm && npm install -g --color=false --spin=false --progress=false --loglevel=warn --unsafe-perm && npm run postinstall --color=false --spin=false --progress=false --loglevel=warn

EXPOSE 3000
CMD cd /opt/app && npm start
