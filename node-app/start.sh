#!/usr/bin/env sh

dockerize -wait tcp://db:5432 -timeout 10s

npm start