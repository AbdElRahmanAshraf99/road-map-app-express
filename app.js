
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/java/Fundamentals/Functions", (req, res) => res.type('json').send(fetchJavaFundamentalSubTopic("Functions")));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

function fetchJavaFundamentalSubTopic(subTopic) {
    if (subTopic === "Functions")
        return {
            mdFileData: 'A **Function (Method)** is a way to perform some task. Similarly, in programming like Java, a function method is a block of code written to perform a\n' +
                'specific task repeatedly. It provides reusability of code. We write the function once and use it many times. It works on the ‘DRY’ principle i.e., “Do\n' +
                'not repeat yourself”.\n' +
                '\n' +
                '#### What Should you do?\n' +
                '\n' +
                '- Method Declaration\n' +
                '- Method Call\n' +
                '\n' +
                '#### Method Declaration\n' +
                '\n' +
                'The method declaration provides information about method attributes, such as visibility, return-type, name, and arguments. It has six components that\n' +
                'are known as method header, as we have shown in the following figure.\n'
        }
}