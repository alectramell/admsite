#!/bin/bash

LOOP="true"

while [ $LOOP == "true" ]
do
	clear
	source <(curl -s http://www.apollondatametrics.com/colors.sh)
	clear
	CHFREQ=$(iwgetid -f | grep -oh -c "Frequency:")
	clear
	if [ $CHFREQ == 0 ]
	then
		clear
		echo "${white}WIFI ${red}NOT CONNECTED${reset}"
		sleep 3.5
		clear
		LOOP="false"
	else
		clear
		echo "${white}WIFI ${green}CONNECTED${reset}"
		sleep 3.5
		clear
		LOOP="true"
	fi

	clear
done
