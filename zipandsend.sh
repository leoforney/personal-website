#!/bin/bash
(cd build && zip -r -q ../static.zip .)
scp static.zip leo@rheseus:/home/leo;
rm -rf static.zip;
