export function fetchJavaRoadMapData(req) {
    let url = require('url');
    let url_parts = url.parse(req.url, true);
    let query = url_parts.query;
    let topic = query['topic'];
    let subTopic = query['subTopic'];
    if (!topic || !subTopic)
        return {
            mdFileData: 'Could not find topic or subtopic'
        }
    switch (topic.toLowerCase()) {
        case "fundamentals":
            return fetchFundamentalsData(subTopic);
        default:
            return {
                mdFileData: 'Could not find data for topic ' + topic,
            };

    }
}

function fetchFundamentalsData(subTopic) {
    switch (subTopic.toLowerCase()) {
        case "functions":
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
        case "packages":
            return {
                mdFileData: '## Java Package\n' +
                    '\n' +
                    '- is a group of similar types of classes, interfaces and sub-packages.\n' +
                    '- can be categorized in two form, built-in package and user-defined package.\n' +
                    '\n' +
                    '### Built-in Packages\n' +
                    '\n' +
                    '- There are many built-in packages such as java, lang, awt, javax, swing, net, io, util, sql etc.\n' +
                    '\n' +
                    '### Advantages of Java Package\n' +
                    '\n' +
                    '1. Java package is used to categorize the classes and interfaces so that they can be easily maintained.\n' +
                    '2. Java package provides access protection.\n' +
                    '3. Java package removes naming collision.\n' +
                    '\n' +
                    '#### How to compile java package\n' +
                    '\n' +
                    'If you are not using any IDE, you need to follow the syntax given below:\n' +
                    '\n' +
                    '```\n' +
                    'javac -d directory javafilename  \n' +
                    '```\n' +
                    '\n' +
                    'For example:\n' +
                    '\n' +
                    '```\n' +
                    'javac -d . Simple.java  \n' +
                    '```\n' +
                    '\n' +
                    '### How to access package from another package?\n' +
                    '\n' +
                    'There are three ways to access the package from outside package.\n' +
                    '\n' +
                    '1. import package.*;\n' +
                    '\n' +
                    '```java\n' +
                    'import java.lang.*;\n' +
                    '```\n' +
                    '\n' +
                    '2. import package.classname;\n' +
                    '\n' +
                    '```java\n' +
                    'import java.lang.String;\n' +
                    '```\n' +
                    '\n' +
                    '3. fully qualified name.\n' +
                    '\n' +
                    '```java\n' +
                    'java.lang.String a=new java.lang.String();\n' +
                    '```\n'
            }
        default:
            return {
                mdFileData: 'Could not find data for subtopic ' + subTopic,
            }
    }
}
