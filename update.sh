#!/bin/bash

clear

git add *.txt
git add *.sh
git add *.html
git add js
git add img
git add fonts
git add audio
git add documents
git add xshell
git add xdebian
git add portfolio
git add xfirefox
git add xchrome
git add dist
git add src
git add README.md
git commit -m "admsite"
git push origin master

clear

echo "DATA UPDATE COMPLETE" | pv -qL 10
