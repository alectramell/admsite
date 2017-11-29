#!/bin/bash

clear

REPS=$(curl -s https://raw.githubusercontent.com/alectramell/admsite/master/reps.txt)

clear

REPLST=($REPS)

clear

echo "${REPLST[0]}" | xxd -r -p


