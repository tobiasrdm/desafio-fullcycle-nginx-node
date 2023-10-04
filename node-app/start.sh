#!/usr/bin/env sh

dockerize -wait tcp://db:3306 -timeout 10s

npm start