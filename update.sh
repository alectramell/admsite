#!/bin/bash

clear

git add *.txt
git add *.sh
git add *.html
git add js
git add img
git add fonts
git add audio
git add README.md
git commit -m "admsite"
git push origin master

clear

echo "DATA UPLOAD COMPLETE" | pv -qL 10
