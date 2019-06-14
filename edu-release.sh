#!/bin/bash

scp -P 54188 -r /Users/leafrontye/h5-piaoniu-server/* root@111.231.78.195:/data/www/h5-piaoniu-server
scp -P 54188 -r /Users/leafrontye/h5-piaoniu-static/target/index.html root@111.231.78.195:/data/www/h5-piaoniu-server/views
