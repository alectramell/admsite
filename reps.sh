#!/bin/bash

clear

REPS=$(curl -s https://raw.githubusercontent.com/alectramell/admsite/master/reps.txt)

clear

echo "$REPS" > /home/$(whoami)/.admrepslst.txt

clear

REPSCOUNT=$(wc -w < /home/$(whoami)/.admrepslst.txt)

clear

REPLST=($REPS)

clear

echo "LOADING REPS LIST.." | pv -qL 10

for i in $(seq 0 $REPSCOUNT)
do
	echo "${REPLST[$i]}" | xxd -r -p
done

echo "..REPS LIST LOAD COMPLETE!" | pg

clear

sleep 0.5

rm /home/$(whoami)/.admrepslst.txt

clear


