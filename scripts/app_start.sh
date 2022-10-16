#!/bin/bash
cd /home/ec2-user/blog-frontend/src
npm start
pm2 start npm --name "blog-frontend" -- start
pm2 startup
pm2 save
pm2 restart all