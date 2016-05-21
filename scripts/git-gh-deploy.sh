#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
gulp build:website &&
git add . &&
git commit -m "deploy to $1" &&
git push $1 master &&
git subtree push --prefix $1 origin gh-pages
