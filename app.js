import "./javaFundamentals";
import {fetchJavaFundamentalSubTopic} from "./javaFundamentals";

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/java/fundamentals/functions", (req, res) => res.type('json').send(fetchJavaFundamentalSubTopic("functions")));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

