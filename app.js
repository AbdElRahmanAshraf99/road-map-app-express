import {fetchJavaFundamentalSubTopic} from "./javaFundamentals";

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/java/Fundamentals/Functions", (req, res) => res.type('json').send(fetchJavaFundamentalSubTopic("Functions")));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

