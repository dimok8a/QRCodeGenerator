const express = require('express');
const path = require('path')
const app = express();
const qrcode = require('qrcode')
const opts = require('./src/opts')
const utf8 = require('utf8')
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/code', (req, res) => {
    const newCodeName = req.query.codeName.slice(1, -1)
    qrcode.toDataURL(utf8.encode(newCodeName), opts, function (err, url) {
        if (err) {
            res.send("Error")
        }
        res.send(url)
    });
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(5000, () => console.log("server has been started"));