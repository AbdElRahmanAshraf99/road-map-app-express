module.exports={fetchJavaRoadMapData}

function fetchJavaRoadMapData(req) {
    let url = require('url');
    let url_parts = url.parse(req.url, true);
    let query = url_parts.query;
    let topic = query['topic'];
    let subTopic = query['subTopic'];
    if (!topic || !subTopic)
        return {
            mdFileData: 'Could not find topic or subtopic'
        }
    switch (topic) {
        case "Fundamentals":
            return fetchFundamentalsData(subTopic);
        case "GettingDeeper":
            return fetchGettingDeeperData(subTopic, req);
        default:
            return {
                mdFileData: 'Could not find data for topic ' + topic,
            };

    }
}

function fetchFundamentalsData(subTopic) {
    switch (subTopic) {
        case "Functions":
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
        case "Packages":
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

function fetchGettingDeeperData(subTopic, req) {
    switch (subTopic) {
        case "MemoryManagement":
            return {
                mdFileData: '### Why Learn Java Memory Management?\n' +
                    '\n' +
                    'We all know that Java itself manages the memory and needs no explicit intervention of the programmer.Garbage collector itself ensures that the unused\n' +
                    'space gets cleaned and memory can be freed when not needed. So what’s the role of programmer and why a programmer needs to learn about the Java Memory\n' +
                    'Management ? Being a programmer, you don’t need to bother with problems like destroying objects, all credits to the garbage collector. However the\n' +
                    'automatic garbage collection doesn’t guarantee everything. If we don’t know how the memory management works, often we will end up amidst things that\n' +
                    'are not managed by JVM (Java Virtual Machine). There are some objects that aren’t eligible for the automatic garbage collection.\n' +
                    '\n' +
                    'Hence knowing the memory management is essential as it will benefit the programmer to write high performance based programs that will not crash, or if\n' +
                    'does so, the programmer will know how to debug or overcome the crashes.\n' +
                    '\n' +
                    '### Introduction:\n' +
                    '\n' +
                    'In every programming language, the memory is a vital resource and is also scarce in nature. Hence it’s essential that the memory is managed thoroughly\n' +
                    'without any leaks. Allocation and deallocation of memory is a critical task and requires a lot of care and consideration. However in Java, unlike\n' +
                    'other programming language, the JVM and to be specific Garbage Collector has the role of managing memory allocation so that the programmer needs not\n' +
                    'to. Whereas in other programming languages such as C the programmer has direct access to the memory who allocates memory in his code, thereby creating\n' +
                    'a lot of scope for leaks.\n' +
                    '\n' +
                    'The major concepts in Java Memory Management :\n' +
                    '\n' +
                    '- JVM Memory Structure\n' +
                    '- Working of Garbage Collector\n' +
                    '\n' +
                    '## Java Memory Structure:\n' +
                    '\n' +
                    'JVM defines various run time data area which are used during execution of a program. Some of the areas are created by the JVM whereas some are created\n' +
                    'by the threads that are used in a program. However, the memory area created by JVM is destroyed only when the JVM exits. The data areas of thread are\n' +
                    'created during instantiation and destroyed when the thread exits.\n' +
                    '\n' +
                    '![Java Memory Areas](https://' + req.headers.host + '/assets/java/gettingDeeper/JavaMemory.png' + ')\n' +
                    '\n' +
                    'Let’s study these parts of memory area in detail:\n' +
                    '\n' +
                    '### Heap\n' +
                    '\n' +
                    '- It is a shared runtime data area and stores the actual object in a memory.\n' +
                    '- It is instantiated during the virtual machine startup.\n' +
                    '- It is allocated for all class instances and array.\n' +
                    '- It can be of fixed or dynamic size depending upon the system’s configuration.\n' +
                    '- JVM provides the user control to initialize or vary the size of heap as per the requirement.\n' +
                    '- When a new keyword is used, object is assigned a space in heap, but the reference of the same exists onto the stack.\n' +
                    '- There exists one and only one heap for a running JVM process.\n' +
                    '\n' +
                    '### Method Area\n' +
                    '\n' +
                    '- It is a logical part of the heap area.\n' +
                    '- It is created on virtual machine startup.\n' +
                    '- It is allocated for class structures, method data and constructor field data, and also for interfaces or special method used in class.\n' +
                    '\n' +
                    '> Note: Though method area is logically a part of heap, it may or may not be garbage collected even if garbage collection is compulsory in heap area.\n' +
                    '\n' +
                    '### JVM Stacks\n' +
                    '\n' +
                    '- A stack is created at the same time when a thread is created and is used to store data and partial results which will be needed while returning\n' +
                    '  value\n' +
                    '  for method and performing dynamic linking.\n' +
                    '- Stacks can either be of fixed or dynamic size. The size of a stack can be chosen independently when it is created.\n' +
                    '- The memory for stack needs not to be contiguous.\n' +
                    '\n' +
                    '### Native method Stacks\n' +
                    '\n' +
                    'Also called as C stacks\n' +
                    '\n' +
                    '- native method stacks are not written in Java language.\n' +
                    '- This memory is allocated for each thread when its created.\n' +
                    '- And it can be of fixed or dynamic nature.\n' +
                    '\n' +
                    '### Program counter (PC) registers\n' +
                    '\n' +
                    'Each JVM thread which carries out the task of a specific method has a program counter register associated with it. The non native method has a PC\n' +
                    'which stores the address of the available JVM instruction whereas in a native method, the value of program counter is undefined. PC register is\n' +
                    'capable of storing the return address or a native pointer on some specific platform.\n' +
                    '\n' +
                    '### Working of a Garbage Collector\n' +
                    '\n' +
                    '- JVM triggers this process and as per the JVM garbage collection process is done or else withheld. It reduces the burden of programmer by\n' +
                    '  automatically performing the allocation or deallocation of memory.\n' +
                    '- Garbage collection process causes the rest of the processes or threads to be paused and thus is costly in nature. This problem is unacceptable for\n' +
                    '  the client but can be eliminated by applying several garbage collector based algorithms. This process of applying algorithm is often termed as\n' +
                    '  Garbage Collector tuning and is important for improving the performance of a program.\n' +
                    '- Another solution is the generational garbage collectors that adds an age field to the objects that are assigned a memory. As more and more objects\n' +
                    '  are created, the list of garbage grows thereby increasing the garbage collection time. On the basis of how many clock cycles the objects have\n' +
                    '  survived, objects are grouped and are allocated an ‘age’ accordingly. This way the garbage collection work gets distributed.\n' +
                    '- In the current scenario, all garbage collectors are generational, and hence, optimal.\n' +
                    '\n' +
                    '> Note: System.gc() and Runtime.gc() are the methods which requests for Garbage collection to JVM explicitly but it doesn’t ensures garbage collection\n' +
                    '> as the final decision of garbage collection is of JVM only.\n' +
                    '\n' +
                    'Knowing how the program and it’s data is stored or organized is essential as it helps when the programmer intends to write an optimized code in terms\n' +
                    'of resources, and it’s consumption. Also, it helps in finding the memory leaks or inconsistency, and helps in debugging memory related errors. However,\n' +
                    'the memory management concept is extremely vast and therefore one must put his best to study it as much as possible to improve the knowledge of the\n' +
                    'same.\n'
            }
        default:
            return {
                mdFileData: 'Could not find data for subtopic ' + subTopic,
            }
    }
}
