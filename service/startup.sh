#!/bin/sh
set -e
echo "-------------------Starting AdServer microservice-----------------------"
export APP_HOME=$(find /app/ -name \\service*.jar)
echo $APP_HOME
java -Xmx200m -jar $APP_HOME
echo "-------------------Finished starting AdServer---------------------------"