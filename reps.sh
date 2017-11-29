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

echo "..." | pv -qL 10
echo "(SOF): " | pv -qL 10

for i in $(seq 0 $REPSCOUNT)
do
	echo "${REPLST[$i]}" | xxd -r -p
	sleep 0.5
done

echo "..." | pg

clear

sleep 0.5

rm /home/$(whoami)/.admrepslst.txt

clear


