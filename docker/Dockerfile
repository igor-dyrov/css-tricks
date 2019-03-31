FROM docker.io/mongo:3.2
ADD init.js /tmp/
RUN mongod --fork --logpath /var/log/mongodb.log \
    && sleep 5 \
    && mongo authDB /tmp/init.js