#!/bin/bash
cd /home/ec2-user/blog-frontend/src
# npm start
pm2 stop 0
pm2 start --name "blog-frontend" npm -- start
pm2 startup
pm2 save --force
pm2 restart all