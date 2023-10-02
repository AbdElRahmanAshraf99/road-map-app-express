
const express = require("express");
const {fetchJavaRoadMapData} = require("./java");
const app = express();
const port = process.env.PORT || 3001;
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const bodyParser = require('body-parser');

app.use(bodyParser.text());
app.use(express.static('public'));
app.use('/assets', express.static('assets'));

let serverPublicIP = null;
app.put("/update-server-public-ip", (req, res) => {
    if (!req.body)
    {
        res.status(400).send("Not Allowed To Send Empty String")
        return;
    }
    serverPublicIP = req.body;
    res.type('text').send(req.body);
});
app.get("/get-server-public-ip", (req, res) => {
    res.type('text').send(serverPublicIP);
});

app.get("/*", (req, res) => res.type('json').send(fetchRoadMapData(req)));


server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

function fetchRoadMapData(req, res) {
    let url = require('url');
    let url_parts = url.parse(req.url, true);
    switch (url_parts.pathname.toLowerCase()) {
        case "/java":
            return fetchJavaRoadMapData(req);
        default:
            return {
                mdFileData: 'Could not find data for this road map'
            };
    }
}
