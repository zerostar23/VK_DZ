#! /bin/bash

cd 1

mkdir f_name1 f_name2 f_name3 f_name3/f_name6

cd f_name3/f_name6 

touch name1.txt name2.txt name3.txt name1.json name2.json

mkdir f_name3 f_name4 f_name5

ls name1.txt

mv name1.txt f_name3/name1.txt  | mv name2.txt f_name4/name2.txt