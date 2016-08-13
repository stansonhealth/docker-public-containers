FROM ubuntu:16.04

RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y python3 python3-pip python3-dev python python-dev python-pip libssl-dev libffi-dev build-essential
RUN pip3 install --upgrade pip>=7.1.2 awscli && pip install --upgrade pip>=7.1.2 ansible>=2.1
#RUN ln -s /usr/bin/python3 /usr/bin/python

CMD mkdir -p /opt/app
VOLUME /opt/
WORKDIR /opt/app/
CMD bash
# RUN
# CMD

