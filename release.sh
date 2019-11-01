#!/bin/bash

sudo npm run build:webpack
sudo npm run build:rollup

sudo gulp sass html

sudo sh mac-serviceWorker.sh
 
scp -P 54188 -r /Users/leafrontye/h5-piaoniu-server/public root@111.231.78.195:/data/www/h5-piaoniu-server
scp -P 54188 -r /Users/leafrontye/h5-piaoniu-server/common root@111.231.78.195:/data/www/h5-piaoniu-server
scp -P 54188 -r /Users/leafrontye/h5-piaoniu-server/config root@111.231.78.195:/data/www/h5-piaoniu-server
scp -P 54188 -r /Users/leafrontye/h5-piaoniu-server/model root@111.231.78.195:/data/www/h5-piaoniu-server
scp -P 54188 -r /Users/leafrontye/h5-piaoniu-server/router root@111.231.78.195:/data/www/h5-piaoniu-server
scp -P 54188 -r /Users/leafrontye/h5-piaoniu-server/views root@111.231.78.195:/data/www/h5-piaoniu-server
scp -P 54188 -r /Users/leafrontye/h5-piaoniu-server/server.js root@111.231.78.195:/data/www/h5-piaoniu-server
