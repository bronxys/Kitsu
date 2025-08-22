#!bin/bash
NOCOLOR='\033[0m'
RED='\033[0;31m'
SABTRED='\033[1;31m'
GREEN='\033[1;32m'
clear



while : 
do
printf "${RED}KITSU MD V5.0 ESTA INICIANDO AGUARDE UM MOMENTO...\n"
if [ "$1" = "sim" ]; then
node connect.js sim
elif [ "$1" = "não" ]; then
node connect.js não
else 
node connect.js
fi
sleep 1 
printf "${RED}︎Programa fechado! Iniciando bot novamente...\n"
done
