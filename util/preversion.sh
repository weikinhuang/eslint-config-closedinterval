#!/usr/bin/env bash

sed -i "s#\(npm install --save-dev\).\+eslint\@.\+\$#\1 $(node -p 'require("./package.json").peerDependencies' \
  | sed 's/[\{\},]//g ; s/: /@/g' \
  | tr -d "'" \
  | tr -d ' ' \
  | tr '\n' ' ' \
  | sort
)#" README.md

git add README.md
echo 'Update devDependencies in README.md' | git commit -m -
