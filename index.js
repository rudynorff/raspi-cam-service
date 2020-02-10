const express = require('express')
const app = express()

const PiCamera = require('pi-camera');






app.get('/', function (req, res) {
    const imageName = `${Date.now()}.jpg`;

    const camera = new PiCamera({
        mode: 'photo',
        output: `${ __dirname }/${imageName}`,
        width: 640,
        height: 480,
        nopreview: true,
      });
  
    camera.snap()
    .then((result) => {
        res.send(getHTML(imageName));
    })
    .catch((error) => {
        res.send(getHTML("404.jpg"));
    });
});


function getHTML(imageName) {
    const html = `<html>
    <head>
        <title>O-Cam</title>
        <meta http-equiv="refresh" content="3">
    </head>
    <body>
        <img src="${ __dirname }/${imageName}" alt="Current view"><br>
        Latest: ${new Date().toISOString()}
    </body>
    </html>`;

    return html;
}
 
app.listen(8080)
