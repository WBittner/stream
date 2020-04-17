const NodeMediaServer = require('node-media-server');
 
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: false,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 3333,
    allow_origin: '*'
  }
};
 
var nms = new NodeMediaServer(config)
nms.run();

const express = require('express')
const app = express()
const port = 3000

app.get('/:stream', (req, res) => res.send(`<html>
<body>
    <script src="https://cdn.bootcss.com/flv.js/1.5.0/flv.min.js"></script>
    <button onclick="play()">Play stream</button><br>

    <video id="videoElement" autoplay >Your browser is too old which doesn't support HTML5 video.</video>
    <script>
        function play() {
            if (flvjs.isSupported()) {
                var videoElement = document.getElementById('videoElement');
                var flvPlayer = flvjs.createPlayer({
                    type: "flv",
                    url: "http://localhost:3333/live/${req.params.stream}.flv",
                    isLive: true
                });
                flvPlayer.attachMediaElement(videoElement);
                flvPlayer.load();
                flvPlayer.play();
            }
        }
    </script> 
</body>
</html>`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))