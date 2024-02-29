#!/bin/bash

echo "Enter commit message:"
read commit_msg

git add .
git commit -m "$commit_msg"
git push origin main

# ./git_automate.sh