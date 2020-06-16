for f in $(find {policy,help} -type f)
do
  echo $f ${f}x
  mv $f ${f}x
done
