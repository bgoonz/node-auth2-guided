C:/WINDOWS/System32/wsl.exe
-----------------------------------------ZIP UTILS-----------------------------------------------------------------------------------------


4.)Recursive-unzip:()===>

find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;




find . -name "*.zip" -type f -print -delete
---------------------------------------------------------------------------------------------------------

Install node modules recursevly (npm i -g recursive-install):


npm-recursive-install
---------------------------------------------------Main Commands---------------------------------------------------------------------------
 

find . -empty -type f -print -delete

find . -empty -type d -print -delete


find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +


find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +






find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +


find . -name '.vscode/' -type d -prune -exec rm -rf '{}' +

----------------------------------------------Remove Spaces In File/Folder Names-----------------------------------------------------------

find . -name "* *" -type d | rename 's/ /_/g'   
find . -name "* *" -type f | rename 's/ /_/g'

-------------------------------------Remove Numbers From File Names------------------------------------------------------------------------


find $dir -type f | sed 's|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \"&\" \"\1\2\"|' | sh

for i in *.html; do mv "$i" "${i%-*}.html"; done

for i in *.*; do mv "$i" "${i%-*}.${i##*.}"; done

-------------------------------------FIND AND REPLACE IN STRING/FOLDER NAMES----------------------------------------------------------------

find . -type f -exec rename 's/string1/string2/g' {} +


find . -type d -exec rename 's/-master//g' {} +

rename 's/\.js\.download$/.js/' *.js\.download 


find . -type d -exec rename 's/es6//g' {} +

-------------------------------------------

#!/bin/bash

for file in *.html.html
do
    mv "${file}" "${file%.html}"
done



#!/bin/bash

for file in *.md.md
do
    mv "${file}" "${file%.md}"
done






find . -type f -exec rename's/\.js\.download$/.js/' *.js\.download ' {} +
---------------------------------------------------------------------------------------------------------

tree -d -I  'node_modules'


tree  -I  'node_modules'


tree -f  -I  'node_modules' >TREE.md

tree -f >README.md



full path:
tree -f ~/ 
---------------------------------------------------------------------------------------------------------

find . -name *right.html  -type f -exec sed -i 's/target="_parent"//g' {} +

---------------------------------------------------------------------------------------------------------
sudo npm i prettier -g

prettier --write .


"pretty": "prettier --write \"./**/*.{js,jsx,py,md,html,css}\"" 


---------------------------------------------------------------------------------------------------------

find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name '.vscode' -type d -prune -exec rm -rf '{}' +

---------------------------------------------------------------------------------------------------------

find ./ -iname "*.md" -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.html"' {} \;





find ./ -iname "*.html" -type f -exec sh -c 'pandoc --wrap=none --from html --to markdown_strict "${0}" -o "${0%.html}.md"' {} \;

---------------------------------------------------------------------------------------------------------
Remove lines contaning string:

sudo sed -i '/githubusercontent/d' ./*sandbox.md


sudo sed -i '/github\.com/d' ./*out.md
---------------------------------------------------------------------------------------------------------
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>

---------------------------------------------------------------------------------------------------------

https://repl.it/@bgoonz/PyScript-Docs?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

---------------------------------------------------------------------------------------------------------

sudo sed -i '/stargazers/d' ./repo.txt
sudo sed -i '/node_modules/d' ./index.html
sudo sed -i '/right\.html/d' ./index.html
sudo sed -i '/right\.html/d' ./right.html


---------------------------------------------------------------------------------------------------------
Delete files contaning a certain string:

find . | xargs grep -l www.redhat.com | awk '{print "rm "$1}' > doit.sh
vi doit.sh // check for murphy and his law
source doit.sh

---------------------------------------------------------------------------------------------------------



https://github.com/stackbit-projects/best-celery-b2d7c/commit/b423b88323a79d11e5979f92b0a185025b3ca86a
------------------------------------------------GIT---------------------------------------------------------
------------------------------------------------GIT---------------------------------------------------------
------------------------------------------------GIT---------------------------------------------------------


git init
git add .
git commit -m"update"
git push -u origin master



git init
git add .
git commit -m"update"
git push -u origin bryan-guner
---------------------------------------------------------------------------------------------------------

Remove Submodules:

git submodule deinit

-----------------------------------------

# download up to 8 submodules at once

git submodule update --init --recursive --jobs 8

git clone --recursive --jobs 8 [URL to Git repo]

-------------------------------GET GISTS:


wget -q -O - https://api.github.com/users/bgoonz/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget



wget -q -O - https://api.github.com/users/thomasmb/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget


wget -q -O - https://api.github.com/users/koraktor/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget
-----------------------------------------

watch -n '100' "git pull && (git ls-files --modified --others --exclude-standard | grep . > /dev/null) && { git add . ; git commit -m '<MESSAGE>' ; git push; }"

-----------------------------------------

git remote remove origin

-----------------------------------------
just clone .git folder:



git clone --bare --branch=master --single-branch https://github.com/bgoonz/My-Web-Dev-Archive.git


---------------------------------------------------------------------------------------------------------



---------------------------------------------------------------------------------------------------------
----------------------------------------Lebab-----------------------------------------------------------------
safe:

 lebab --replace ./ --transform arrow
 lebab --replace ./ --transform arrow-return
 lebab --replace ./ --transform for-of
 lebab --replace ./ --transform for-each
 lebab --replace ./ --transform arg-rest
 lebab --replace ./ --transform arg-spread
 lebab --replace ./ --transform obj-method
 lebab --replace ./ --transform obj-shorthand
 lebab --replace ./ --transform multi-var


ALL:


lebab --replace ./ --transform obj-method
lebab --replace ./ --transform class
lebab --replace ./ --transform arrow
lebab --replace ./ --transform let
lebab --replace ./ --transform arg-spread
lebab --replace ./ --transform arg-rest
lebab --replace ./ --transform for-each
lebab --replace ./ --transform for-of
lebab --replace ./ --transform commonjs 
lebab --replace ./ --transform exponent
lebab --replace ./ --transform multi-var
lebab --replace ./ --transform template
lebab --replace ./ --transform default-param
lebab --replace ./ --transform  destruct-param 
lebab --replace ./ --transform includes
lebab --replace ./ --transform obj-method
lebab --replace ./ --transform class
lebab --replace ./ --transform arrow
lebab --replace ./ --transform arg-spread
lebab --replace ./ --transform arg-rest
lebab --replace ./ --transform for-each
lebab --replace ./ --transform for-of
lebab --replace ./ --transform commonjs 
lebab --replace ./ --transform exponent
lebab --replace ./ --transform multi-var
lebab --replace ./ --transform template
lebab --replace ./ --transform default-param
lebab --replace ./ --transform  destruct-param 
lebab --replace ./ --transform includes





-------------------------------------------
---------------------------------------Trouble Shooting------------------------------------------------------------------
input/Output error

PS C:\WINDOWS\system32> wsl.exe --shutdown
PS C:\WINDOWS\system32>  Get-Service LxssManager | Restart-Service

---------------------------------------------------------------------------------------------------------


Fudge2312!

IP: 173.70.97.51

Log into postgres:
sudo -u postgres psql
-------------------------------------------------------------Symbolic Link--------------------------------------------
sudo ln -s ./mnt/c/MY-WEB-DEV


--------------------------------------------
return to bash from zsh
 sudo apt --purge remove zsh

















cat w07_data-structures-and-algorithms.md* | codedown javascript > code.js


cat README.md* | codedown javascript > code.js
cat interview Questions.md* | codedown javascript > code.js
cat README.md* | codedown javascript > code.js

cat w08_getting-to-know-the-network.html* | codedown javascript > code.js


cat *.html | codedown javascript > code.js


cat *.markdown | codedown javascript > code.js







----------------------------------auto generate readme-----------------------------------------------------------------------









rename existing readme to blueprint.md


npx @appnest/readme generate


---------------------------------------------------------------------------------------------------------
npm i -g mdt-docs-generator

RENAME README.md     ===> README_RAW.md






mdt-docs
---------------------------------------------------------------------------------------------------------




---------------------------------Export Medium as Markdown------------------------------------------------------------------------

mediumexporter https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4 >ds.md


-------------------------Delete within size range--------------------------------------------------------------------------------

find . -size +386b -a -size -390b -exec rm -f {} \;

find . -size +2000b  -exec rm -f {} \;

---------------------------------------------------------------------------------------------------------
Create symbolic link to working directory


ln -s "$(pwd)" ~/mylink


npm install redux-logger redux-thunk styled-components

---------------------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------------------
find <mydir> -type f -exec sed -i 's/<string1>/<string2>/g' {} +

find . -type f -exec rename 's/-master//g' {} +

find . -type f -exec rename 's/-main//g' {} +
---------------------------------------------------------------------------------------------------------


INSTEAD OF GIT PUSH _F :git reset --hard upstream/master




TRIM ALL(USE WITH CAUTION):
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -empty -type d -print -delete






find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +


find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +


find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +


---------------------------------------------------------------------------------------------------------

Replace spaces in filenames with underscores 

 for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
Netlify error: 1:32:52 AM: Error checking out submodules: fatal: No url found for submodule path '2-content/awesome-resources/Cumulative-Resource-List-master' in .gitmodules

git rm --cached 2-content/awesome-resources/Cumulative-Resource-List-master

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------





find . -name "*right.md" -type f -print -delete


find . -name "*right.html" -type f -print -delete


find . -name "*analytics.js" -type f -print -delete

find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;


find . -name "*desktop.ini" -type f -print -delete


find . -name "*.zip" -type f -print -delete




find ./ -type f -name *.tar.gz -exec tar -xf {} \;

git remote remove origin


find . -name "*.gz" -type f -print -delete
dac9ba0 


find . -name "*.tgz" -type f -print -delete
---------------------------------------------------------------------------------------------------------
lebab --replace ./ --transform obj-method
lebab --replace ./ --transform class
lebab --replace ./ --transform arrow
lebab --replace ./ --transform let
lebab --replace ./ --transform arg-spread
lebab --replace ./ --transform arg-rest
lebab --replace ./ --transform for-each
lebab --replace ./ --transform for-of
lebab --replace ./ --transform commonjs 
lebab --replace ./ --transform exponent
lebab --replace ./ --transform multi-var
lebab --replace ./ --transform template
lebab --replace ./ --transform default-param
lebab --replace ./ --transform  destruct-param 
lebab --replace ./ --transform includes



lebab --replace ./ --transform obj-method
lebab --replace ./ --transform class
lebab --replace ./ --transform arrow

lebab --replace ./ --transform arg-spread
lebab --replace ./ --transform arg-rest
lebab --replace ./ --transform for-each
lebab --replace ./ --transform for-of
lebab --replace ./ --transform commonjs 
lebab --replace ./ --transform exponent
lebab --replace ./ --transform multi-var
lebab --replace ./ --transform template
lebab --replace ./ --transform default-param
lebab --replace ./ --transform  destruct-param 
lebab --replace ./ --transform includes

---------------------------------------------------------------------------------------------------------
