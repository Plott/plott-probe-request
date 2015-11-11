#!/bin/sh

sudo service ifplugd stop
sudo ifconfig wlan1 down
sudo iwconfig wlan1 mode monitor
sudo service ifplugd start
ifconfig -h
sudo ifconfig wlan1 up
