#!/bin/bash

REQ1=$(which speedtest-cli)

if [ $REQ1 != "/usr/bin/speedtest-cli" ]
then
	clear
	echo "REQ1=false" | pv -qL 5
	sleep 1.5
	clear
	sudo apt-get install speedtest-cli
	clear
	echo "REQ1=true" | pv -qL 5
	sleep 0.5
	clear
else
	clear
	echo "REQ1=true" | pv -qL 5
	sleep 0.5
	clear
fi

clear

echo "REQS ARE UP-TO-DATE!" | pv -qL 10
sleep 1.5
