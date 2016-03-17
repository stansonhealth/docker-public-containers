Phusion-based generic container to run python-based crons. Also has pg client drivers.

To use this:

- pass `build_s3_bucket` and `build_s3_key` as environment variables. TODO
- TODO: explain run.sh

To run it manually:

    docker run --env build_s3_bucket=TODO --env build_s3_key=TODO/TODO.tgz -it stansonhealth/python3-cron:latest

