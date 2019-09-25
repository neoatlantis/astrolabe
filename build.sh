#!/bin/sh

python3 -m transcrypt -np.user -e6 astrolabesvg/__init__.py
cp astrolabesvg/__javascript__/__init__.js ./astrolabesvg.js
