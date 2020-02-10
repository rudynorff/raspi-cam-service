 #!/bin/sh

sudo npm install -g pm2
sudo pm2 start index.js
sudo pm2 startup

