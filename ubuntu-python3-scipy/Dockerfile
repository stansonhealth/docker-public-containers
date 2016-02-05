FROM ubuntu:14.04
# debian based; https://github.com/docker-library/openjdk/blob/master/openjdk-8-jre/Dockerfile

RUN apt-get update && apt-get install -y python3 python3-scipy python3-pip python3-dev libpq-dev python3-dev
RUN pip3 install --upgrade pip==7.1.2
RUN ln -s /usr/bin/python3 /usr/bin/python
RUN pip install awscli

CMD mkdir -p /opt/app
VOLUME /opt/

ADD requirements.txt /opt/app/requirements.txt
RUN pip install -r /opt/app/requirements.txt
# RUN
# CMD
