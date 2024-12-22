#!/bin/bash

# this script exports the plugin to zip file ready to be putted on https://plugins.typemill.net/
# the lib must be downloaded first with prepare_libs.sh

FILES="
    LICENSE 
    figureSwipe.php 
    figureSwipe.yaml 
    public/figureSwipe.js 
    public/lib/PhotoSwipe/LICENSE 
    public/lib/PhotoSwipe/README.md
    public/lib/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css
    public/lib/photoswipe-dynamic-caption-plugin/LICENSE 
    public/lib/photoswipe-dynamic-caption-plugin/README.md
    "

DIRS="
    public/lib/PhotoSwipe/dist 
    public/lib/photoswipe-dynamic-caption-plugin/dist 
    "

TMP=/tmp/$$
FIGURESWIPE=$TMP/figureSwipe
mkdir -p $FIGURESWIPE
for f in $FILES; do
    mkdir -p $FIGURESWIPE/`dirname $f`
    cp $f $FIGURESWIPE/$f
done
for d in $DIRS; do
    mkdir -p $FIGURESWIPE/`dirname $d`
    cp -r $d  $FIGURESWIPE/$d
done

MYDIR=`pwd`
cd $TMP
rm -f $MYDIR/figureSwipe.zip
zip -r $MYDIR/figureSwipe.zip figureSwipe
cd $MYDIR
rm -rf $TMP
echo "figureSwipe.zip ready to be uploaded to https://plugins.typemill.net/"
