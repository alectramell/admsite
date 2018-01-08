#!/bin/bash

clear

source <(curl -s https://raw.githubusercontent.com/alectramell/beacons/master/colors.sh)

clear

echo "█"
echo "▒"

clear

echo "             "
echo "    ${purple}▒${white}██████${reset} "
echo "    ${purple}▒${white}██${reset} ${purple}▒${white}██${reset}  "
echo "    ${purple}▒${white}██████${reset}  "
echo "    ${purple}▒${white}██${reset} ${purple}▒${white}██${reset}  "
echo "             "
echo "  ${white}A T H E N A${reset}" | pv -qL 10
echo "             "

read -s -n1

clear
