# stream

OBS settings:
URL : rtmp://localhost/live
Stream key : STREAM_NAME

run server: node index.js

url is localhost:3000/STREAM_NAME

If you want to host this make sure you change HOSTED_URL in the index as well as port forward both 3333 and 3000 (3333 is stream port, 3000 is the webpage port)