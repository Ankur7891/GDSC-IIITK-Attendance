#!/bin/bash

ip=$(/sbin/ip -o -4 addr list wlan0 | awk '{print $4}' | cut -d/ -f1)

python setJsonFile.py $ip
mv ipJson.json ./FrontEnd/src/

echo "Generate QR using :"
echo $ip":3000"



