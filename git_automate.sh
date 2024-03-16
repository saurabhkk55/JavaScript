#!/bin/bash

echo "Enter commit message:"
read commit_msg

git add .
git commit -s
git push origin main

# ./git_automate.sh