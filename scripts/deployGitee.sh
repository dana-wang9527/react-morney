#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin gitgit@gitee.com:yuyuetianya/react-morney-website.git &&
git push -u origin master -f
cd -