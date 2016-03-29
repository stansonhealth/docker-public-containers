FROM java:openjdk-8-jre
# debian based; https://github.com/docker-library/openjdk/blob/master/openjdk-8-jre/Dockerfile

# we need python- for aws-cli, if nothing else. "update" hasn't been done in the base container.
# also, buildpack-deps doesn't have bash ¯\_(ツ)_/¯
RUN apt-get update && apt-get install -y python=2.* python-pip bash
RUN pip install --upgrade pip awscli

ENV build_s3_bucket="BUCKET_NAME"
ENV build_s3_key="BUCKET_KEY"
ENV luigi_client_config_s3_path="TODO"

# RUN
CMD mkdir -p /opt/app
VOLUME /opt/
VOLUME /usr/src/app/
CMD /sbin/my_init -- bash -c "echo \"env: $luigi_client_config_s3_path\" && if [ \"$luigi_client_config_s3_path\" != \"TODO\" ]; then aws --region=us-east-1 s3 cp ${luigi_client_config_s3_path} /etc/luigi/client.cfg; fi; mkdir -p /opt/app && aws --region=us-east-1 s3 cp s3://${build_s3_bucket}/${build_s3_key} /opt/app/app.tgz && tar -C /opt/app/ -xzvf /opt/app/app.tgz && bash /opt/app/run.sh"
