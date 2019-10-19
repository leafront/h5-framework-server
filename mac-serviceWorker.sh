#!/bin/bash
cp src/serviceWorker.js  public/serviceWorker.js
rm -f serviceWorker.txt
function readfile ()
{
#这里`为esc下面的按键符号
  for file in `ls $1`
  do
#这里的-d表示是一个directory，即目录/子文件夹
    if [ -d $1"/"$file ]
    then
#如果子文件夹则递归
      readfile $1"/"$file
    else
#否则就能够读取该文件的地址
     /bin/echo -n \"$1"/"$file\"\, >> serviceWorker.txt
#读取该文件的文件名，basename是提取文件名的关键字
   #echo `basename $file` >> fileName.txt
   fi
  done
}
#函数定义结束，这里用来运行函数
folder="./public"
readfile $folder

sed -i '' 's/\.\/public//g' serviceWorker.txt
sed -i '' '$s/,$//' serviceWorker.txt

filepath=$(cd "$(dirname "$0")"; pwd)  

getFileName=$(cat "${filepath}/serviceWorker.txt")

sed -i '' "s:CONFIG:${getFileName}:g" ${filepath}/public/serviceWorker.js
time=$(date "+%Y%m%d%H%M")
sed -i '' "s:CACHE_VERSION:${time}:g" ${filepath}/public/serviceWorker.js
sed -i '' "s:\"\/index\.html\",::g" ${filepath}/public/serviceWorker.js
sed -i '' "s:\"/serviceWorker\.js\",::g" ${filepath}/public/serviceWorker.js



