#!/bin/bash
# Script to replace color #dfb76c or #ebd09b or #c99e4f with #ee6767
# And fix box shadows

files=$(grep -rlE "#(dfb76c|ebd09b|c99e4f)" . --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=dist)

for file in $files; do
    echo "Processing $file"
    sed -i 's/#dfb76c/#ee6767/g' "$file"
    sed -i 's/#ebd09b/#ee6767/g' "$file"
    sed -i 's/#c99e4f/#ee6767/g' "$file"
    # Replacing shadows is harder since they are dynamic, I'll rely on the grep to find them and edit if needed.
done
