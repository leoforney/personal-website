#!/bin/bash
(cd build && chmod ugo+r . && zip -r -q ../static.zip .)
scp static.zip leo@ssh.leoforney.me:/home/leo;
rm -rf static.zip;
