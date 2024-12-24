BUCKET="s3://codeclub.icantech.org"

aws s3 sync . ${BUCKET} --exclude ".git/*" --exclude ".*" --exclude "tools/*"
