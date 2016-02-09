FROM java:openjdk-8-jre
# debian based; https://github.com/docker-library/openjdk/blob/master/openjdk-8-jre/Dockerfile

# we need python- for aws-cli, if nothing else. "update" hasn't been done in the base container.
RUN apt-get update && apt-get install -y python=2.* python-pip
RUN pip install --upgrade pip awscli

# RUN
CMD mkdir -p /opt/app
VOLUME /opt/
VOLUME /usr/src/app/
