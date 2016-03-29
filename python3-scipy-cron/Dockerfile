FROM phusion/baseimage:0.9.18
# look for new versions here: https://github.com/phusion/baseimage-docker/blob/master/Changelog.md
# has 'python3', nothing linked to 'python'.

# need gcc to compile psycopg2
# env: http://askubuntu.com/a/506635/69983
ADD get-pip.py /usr/src/get-pip.py
ADD requirements.txt /usr/src/requirements.txt
RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y libpq-dev gcc python3-dev python3-scipy python3-pandas-lib python3-pandas
RUN python3 /usr/src/get-pip.py && pip3 install "psycopg2>=2.6,<2.7" awscli && LANG=en_US.UTF-8 pip install -r /usr/src/requirements.txt
#RUN DEBIAN_FRONTEND=noninteractive apt-get autoremove -y gcc
# keep this for later pip work

RUN ln -s /usr/bin/python3 /usr/bin/python

CMD mkdir -p /opt/app
VOLUME /opt/
VOLUME /usr/src/app/

ENV build_s3_bucket="BUCKET_NAME"
ENV build_s3_key="BUCKET_KEY"
ENV luigi_client_s3_path="TODO"

# make sure volumes are the last thing done in their directory. otherwise contents are discarded with a further file operation.
VOLUME /opt/
VOLUME /usr/src/app/

# no matter the command, we wrap it with my_init, which gets the services running.
CMD /sbin/my_init -- bash -c "echo \"env: $luigi_client_config_s3_path\" && if [ \"$luigi_client_config_s3_path\" != \"TODO\" ]; then aws --region=us-east-1 s3 cp ${luigi_client_config_s3_path} /etc/luigi/client.cfg; fi; mkdir -p /opt/app && aws --region=us-east-1 s3 cp s3://${build_s3_bucket}/${build_s3_key} /opt/app/app.tgz && tar -C /opt/app/ -xzvf /opt/app/app.tgz && bash /opt/app/run.sh"


