#!/bin/bash

ergogen .

mkdir output/stls

for f in output/cases/*.jscad
do
    xbase=${f##*/}
    xpref=${xbase%.*}
    npx @jscad/cli@1 $f -of stla -o output/stls/${xpref}.stl
done
