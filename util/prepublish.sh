#!/usr/bin/env bash

node -e '
  var pkg = require("./package.json");

  delete pkg.repository;
  delete pkg.homepage;

  console.log(JSON.stringify(pkg, null, 2));
' > package.json
