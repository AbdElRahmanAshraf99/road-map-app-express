module.exports={fetchJavaRoadMapData}

function fetchJavaRoadMapData(req) {
    let url = require('url');
    let url_parts = url.parse(req.url, true);
    let query = url_parts.query;
    let action = query['action'];
    if (action && action === "fetchCompletedSubTopics") {
        return {
            "completed": ["Packages", "MemoryManagement", "CollectionFramework", "Generics", "Serialization", "NetworkingAndSockets"]
        }
    }
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
                    '![Java Memory Areas](https://' + req.headers.host + '/assets/java/gettingDeeper/JavaMemory.png)\n' +
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
        case "CollectionFramework":
            return {
                mdFileData: '## Collection Framework in Java\n' +
                    '\n' +
                    '### What is a Framework in Java?\n' +
                    '\n' +
                    '- It provides ready-made architecture.\n' +
                    '- It represents a set of classes and interfaces.\n' +
                    '- It is optional.\n' +
                    '\n' +
                    '### What is a Collection in Java?\n' +
                    '\n' +
                    '**Collection** represents a single unit of objects like a group.\n' +
                    '\n' +
                    '### What is Collection Framework in Java?\n' +
                    '\n' +
                    'The Collection framework represents a unified architecture for storing and manipulating a group of objects. It has:\n' +
                    '\n' +
                    '- Interfaces and its implementations (classes).\n' +
                    '- Algorithms\n' +
                    '\n' +
                    '![Collection Hierarchy](https://' + req.headers.host + '/assets/java/gettingDeeper/collectionHierarchy.jpeg)\n' +
                    '\n' +
                    '### Iterable (Interface)\n' +
                    '\n' +
                    'It is the root interface for all the collection classes.\n' +
                    '\n' +
                    '1. Iterator<T> iterator(); ==> { E next(), boolean hasNext(), void remove()}\n' +
                    '2. void forEach(Consumer<? super T> action);\n' +
                    '3. Spliterator<T> spliterator();\n' +
                    '\n' +
                    '### Collection (Interface) (extends Iterable)\n' +
                    '\n' +
                    '1. boolean add(E e);\n' +
                    '2. boolean addAll(Collection<? extends E> c);\n' +
                    '3. boolean contains(Object o);\n' +
                    '4. boolean containsAll(Collection<?> c);\n' +
                    '5. boolean remove(Object o);\n' +
                    '6. boolean removeAll(Collection<?> c);\n' +
                    '7. boolean removeIf(Predicate<? super E> filter)\n' +
                    '8. boolean retainAll(Collection<?> c);\n' +
                    '9. void clear();\n' +
                    '10. int size();\n' +
                    '11. boolean isEmpty();\n' +
                    '12. Object[] toArray();\n' +
                    '13. T[] toArray(T[] a);\n' +
                    '14. Stream<E> stream();\n' +
                    '15. Stream<E> parallelStream();\n' +
                    '\n' +
                    '### List (Interface) (extends Collection)\n' +
                    '\n' +
                    'Properties:(Ordered - index-based - Can contain Duplicates)\n' +
                    '\n' +
                    '1. void add(int index, E element);\n' +
                    '2. E set(int index, E element);\n' +
                    '3. boolean addAll(int index, Collection<? extends E> c);\n' +
                    '4. void replaceAll(UnaryOperator<E> operator);\n' +
                    '5. E get(int index);\n' +
                    '6. E remove(int index);\n' +
                    '7. void sort(Comparator<? super E> c);\n' +
                    '8. int indexOf(Object o);\n' +
                    '9. int lastIndexOf(Object o);\n' +
                    '10. List<E> subList(int fromIndex, int toIndex);\n' +
                    '11. ListIterator<E> listIterator();\n' +
                    '12. ListIterator<E> listIterator(int index);\n' +
                    '\n' +
                    '### ArrayList (Class) (implements List)\n' +
                    '\n' +
                    'Properties (Dynamic array - non-synchronized)\n' +
                    '\n' +
                    '### LinkedList (Class) (implements List, Dequeue)\n' +
                    '\n' +
                    'Properties (Fast in manipulating - non-synchronized)\n' +
                    '\n' +
                    '### Vector (Class) (implements List)\n' +
                    '\n' +
                    'Properties (Synchronized ArrayList)\n' +
                    '\n' +
                    '### Stack (Class) (extends Vector)\n' +
                    '\n' +
                    'Properties (Last-in-first-out order)\n' +
                    '\n' +
                    '### Set (Interface) (extends Collection)\n' +
                    '\n' +
                    'Properties:(Not Ordered - Not index-based - Can not contain Duplicates)\n' +
                    '\n' +
                    'Don\'t have Extra methods (only extended)\n' +
                    '\n' +
                    '### HashSet (Class) (implements Set)\n' +
                    '\n' +
                    'Properties (Using Hash Table Storing)\n' +
                    '\n' +
                    '### LinkedHashSet (Class) (implements Set)\n' +
                    '\n' +
                    'Properties (LinkedList Set)\n' +
                    '\n' +
                    '### SortedSet (Interface) (extends Set)\n' +
                    '\n' +
                    'Properties:(Ordered In Ascending Order)\n' +
                    '\n' +
                    '1. Comparator<? super E> comparator();\n' +
                    '2. SortedSet<E> subSet(E fromElement, E toElement);\n' +
                    '3. SortedSet<E> headSet(E toElement);\n' +
                    '4. SortedSet<E> tailSet(E fromElement);\n' +
                    '5. E first();\n' +
                    '6. E last();\n' +
                    '\n' +
                    '### TreeSet (Class) (implements SortedSet)\n' +
                    '\n' +
                    'Properties (Tree Storing - Ascending Order)\n' +
                    '\n' +
                    '### Queue (Interface) (extends Collection)\n' +
                    '\n' +
                    'Properties:(First-in-First-out order)\n' +
                    '\n' +
                    '1. boolean offer(E e);\n' +
                    '2. E remove();\n' +
                    '3. E poll();\n' +
                    '4. E element();\n' +
                    '5. E peek();\n' +
                    '\n' +
                    '### PriorityQueue (Class) (implements Queue)\n' +
                    '\n' +
                    'Properties (Priorities - No Nulls )\n' +
                    '\n' +
                    '### Deque (Interface) (extends Queue)\n' +
                    '\n' +
                    'Properties:(double-ended queue)\n' +
                    '\n' +
                    '1. void addFirst(E e);\n' +
                    '2. void addLast(E e);\n' +
                    '3. boolean offerFirst(E e);\n' +
                    '4. boolean offerLast(E e);\n' +
                    '5. E removeFirst();\n' +
                    '6. E removeLast();\n' +
                    '7. E pollFirst();\n' +
                    '8. E pollLast();\n' +
                    '9. E getFirst();\n' +
                    '10. E getLast();\n' +
                    '11. E peekFirst();\n' +
                    '12. E peekLast();\n' +
                    '13. boolean removeFirstOccurrence(Object o);\n' +
                    '14. boolean removeLastOccurrence(Object o);\n' +
                    '15. void push(E e);\n' +
                    '16. E pop();\n' +
                    '17. Iterator<E> descendingIterator();\n' +
                    '\n' +
                    '### ArrayDequeue (Class) (implements Deque)\n' +
                    '\n' +
                    'Properties (No Capacity Restrictions)\n' +
                    '\n' +
                    '### Map (Interface) (Not Iterable)\n' +
                    '\n' +
                    'Properties (Key-value based - Not Ordered - No Duplicates)\n' +
                    '\n' +
                    '1. V put(K key, V value);\n' +
                    '2. V putIfAbsent(K key, V value);\n' +
                    '3. void putAll(Map<? extends K, ? extends V> m);\n' +
                    '4. V get(Object key);\n' +
                    '5. V getOrDefault(Object key, V defaultValue);\n' +
                    '6. boolean containsKey(Object key);\n' +
                    '7. boolean containsValue(Object value);\n' +
                    '8. Set<K> keySet();\n' +
                    '9. Collection<V> values();\n' +
                    '10. Set<Map.Entry<K, V>> entrySet();\n' +
                    '11. boolean isEmpty();\n' +
                    '12. V remove(Object key);\n' +
                    '13. boolean remove(Object key, Object value)\n' +
                    '14. void clear();\n' +
                    '15. int size();\n' +
                    '16. void forEach(BiConsumer<? super K, ? super V> action);\n' +
                    '17. boolean replace(K key, V oldValue, V newValue)\n' +
                    '18. V replace(K key, V value)\n' +
                    '19. void replaceAll(BiFunction<? super K, ? super V, ? extends V> function);\n' +
                    '20. V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction);\n' +
                    '21. V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction);\n' +
                    '22. V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction);\n' +
                    '23. V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction);\n' +
                    '\n' +
                    '### ConcurrentMap (Interface) (extends Map)\n' +
                    '\n' +
                    '### HashMap (Class) (implements Map)\n' +
                    '\n' +
                    '### LinkedHashMap (Class) (implements Map)\n' +
                    '\n' +
                    '### HashTable (Class) (implements Map)\n' +
                    '\n' +
                    '### ArrayMap (Class) (implements Map)\n'
            }
        case "Generics":
            return {
                mdFileData: '## Generics in Java\n' +
                    '\n' +
                    '**Generics** means parameterized types. The idea is to allow type (Integer, String, … etc., and user-defined types) to be a parameter to methods,\n' +
                    'classes, and interfaces. Using Generics, it is possible to create classes that work with different data types. An entity such as class, interface, or\n' +
                    'method that operates on a parameterized type is a generic entity.\n' +
                    '\n' +
                    '### Why Generics?\n' +
                    '\n' +
                    'The Object is the superclass of all other classes, and Object reference can refer to any object. These features lack type safety. Generics add that\n' +
                    'type of safety feature. We will discuss that type of safety feature in later examples.\n' +
                    '\n' +
                    'Generics in Java are similar to templates in C++. For example, classes like HashSet, ArrayList, HashMap, etc., use generics very well. There are some\n' +
                    'fundamental differences between the two approaches to generic types.\n' +
                    '\n' +
                    '### Types of Java Generics\n' +
                    '\n' +
                    '**1. Generic Method:** Generic Java method takes a parameter and returns some value after performing a task. It is exactly like a normal function,\n' +
                    'however, a generic method has type parameters that are cited by actual type. This allows the generic method to be used in a more general way. The\n' +
                    'compiler takes care of the type of safety which enables programmers to code easily since they do not have to perform long, individual type castings.\n' +
                    '\n' +
                    '**2. Generic Classes:** A generic class is implemented exactly like a non-generic class. The only difference is that it contains a type parameter\n' +
                    'section.\n' +
                    'There can be more than one type of parameter, separated by a comma. The classes, which accept one or more parameters, ​are known as parameterized\n' +
                    'classes or parameterized types.\n' +
                    '\n' +
                    '### Generic Class\n' +
                    '\n' +
                    'Like C++, we use <> to specify parameter types in generic class creation. To create objects of a generic class, we use the following syntax.\n' +
                    '\n' +
                    '```java\n' +
                    '// To create an instance of generic class \n' +
                    'BaseType<Type> obj=new BaseType<Type>();\n' +
                    '```\n' +
                    '\n' +
                    '>  Note: In Parameter type we can not use primitives like ‘int’,’char’ or ‘double’.\n' +
                    '\n' +
                    '```java\n' +
                    '// We use < > to specify Parameter type\n' +
                    'class Test<T>\n' +
                    '{\n' +
                    '   // An object of type T is declared\n' +
                    '   T obj;\n' +
                    '\n' +
                    '   // constructor\n' +
                    '   Test(T obj)\n' +
                    '   {\n' +
                    '      this.obj = obj;\n' +
                    '   }\n' +
                    '\n' +
                    '   public T getObject()\n' +
                    '   {\n' +
                    '      return this.obj;\n' +
                    '   }\n' +
                    '}\n' +
                    '// Driver class to test above\n' +
                    'class Main\n' +
                    '{\n' +
                    '   public static void main(String[] args)\n' +
                    '   {\n' +
                    '      // instance of Integer type\n' +
                    '      Test<Integer> iObj = new Test<Integer>(15);\n' +
                    '      System.out.println(iObj.getObject());\n' +
                    '\t  \n' +
                    '      // instance of String type\n' +
                    '      Test<String> sObj = new Test<String>("GeeksForGeeks");\n' +
                    '      System.out.println(sObj.getObject());\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n' +
                    '**Output**\n' +
                    '\n' +
                    '```text\n' +
                    '15\n' +
                    'GeeksForGeeks\n' +
                    '```\n' +
                    '\n' +
                    'We can also pass multiple Type parameters in Generic classes.\n' +
                    '\n' +
                    '```java\n' +
                    '// We use < > to specify Parameter type\n' +
                    'class Test<T, U>\n' +
                    '{\n' +
                    '   T obj1;  // An object of type T\n' +
                    '   U obj2;  // An object of type U\n' +
                    '\n' +
                    '   // constructor\n' +
                    '   Test(T obj1, U obj2)\n' +
                    '   {\n' +
                    '      this.obj1 = obj1;\n' +
                    '      this.obj2 = obj2;\n' +
                    '   }\n' +
                    '\n' +
                    '   // To print objects of T and U\n' +
                    '   public void print()\n' +
                    '   {\n' +
                    '      System.out.println(obj1);\n' +
                    '      System.out.println(obj2);\n' +
                    '   }\n' +
                    '}\n' +
                    '\n' +
                    '// Driver class to test above\n' +
                    'class Main\n' +
                    '{\n' +
                    '   public static void main(String[] args)\n' +
                    '   {\n' +
                    '      Test<String, Integer> obj = new Test<String, Integer>("GfG", 15);\n' +
                    '\n' +
                    '      obj.print();\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n' +
                    '**Output**\n' +
                    '\n' +
                    '```text\n' +
                    'GfG\n' +
                    '15\n' +
                    '```\n' +
                    '\n' +
                    '### Generic Functions:\n' +
                    '\n' +
                    'We can also write generic functions that can be called with different types of arguments based on the type of arguments passed to the generic method.\n' +
                    'The compiler handles each method.\n' +
                    '\n' +
                    '```java\n' +
                    'class Test\n' +
                    '{\n' +
                    '   // A Generic method example\n' +
                    '   static <T> void genericDisplay(T element)\n' +
                    '   {\n' +
                    '      System.out.println(element.getClass().getName() + " = " + element);\n' +
                    '   }\n' +
                    '\n' +
                    '   // Driver method\n' +
                    '   public static void main(String[] args)\n' +
                    '   {\n' +
                    '      // Calling generic method with Integer argument\n' +
                    '      genericDisplay(11);\n' +
                    '\n' +
                    '      // Calling generic method with String argument\n' +
                    '      genericDisplay("GeeksForGeeks");\n' +
                    '\n' +
                    '      // Calling generic method with double argument\n' +
                    '      genericDisplay(1.0);\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n' +
                    '**Output**\n' +
                    '\n' +
                    '```text\n' +
                    'java.lang.Integer = 11\n' +
                    'java.lang.String = GeeksForGeeks\n' +
                    'java.lang.Double = 1.0\n' +
                    '```\n' +
                    '\n' +
                    '### Generics Work Only with Reference Types:\n' +
                    '\n' +
                    'When we declare an instance of a generic type, the type argument passed to the type parameter must be a reference type. We cannot use primitive data\n' +
                    'types like int, char.\n' +
                    '\n' +
                    '```java\n' +
                    'Test<int>obj=new Test<int>(20);\n' +
                    '```\n' +
                    '\n' +
                    'The above line results in a compile-time error that can be resolved using type wrappers to encapsulate a primitive type.\n' +
                    '\n' +
                    'But primitive type arrays can be passed to the type parameter because arrays are reference types.\n' +
                    '\n' +
                    '```java\n' +
                    'ArrayList<int[]>a=new ArrayList<>();\n' +
                    '```\n' +
                    '\n' +
                    '### Generic Types Differ Based on Their Type Arguments:\n' +
                    '\n' +
                    'Consider the following Java code.\n' +
                    '\n' +
                    '```java\n' +
                    'class Test<T>\n' +
                    '{\n' +
                    '   // An object of type T is declared\n' +
                    '   T obj;\n' +
                    '\n' +
                    '   Test(T obj)\n' +
                    '   {\n' +
                    '      this.obj = obj;\n' +
                    '   } // constructor\n' +
                    '\n' +
                    '   public T getObject()\n' +
                    '   {\n' +
                    '      return this.obj;\n' +
                    '   }\n' +
                    '}\n' +
                    '\n' +
                    '// Driver class to test above\n' +
                    'class Main\n' +
                    '{\n' +
                    '   public static void main(String[] args)\n' +
                    '   {\n' +
                    '      // instance of Integer type\n' +
                    '      Test<Integer> iObj = new Test<Integer>(15);\n' +
                    '      System.out.println(iObj.getObject());\n' +
                    '\n' +
                    '      // instance of String type\n' +
                    '      Test<String> sObj = new Test<String>("GeeksForGeeks");\n' +
                    '      System.out.println(sObj.getObject());\n' +
                    '      iObj = sObj; // This results an error\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n' +
                    '**Output**\n' +
                    '\n' +
                    '```text\n' +
                    'error:\n' +
                    ' incompatible types:\n' +
                    ' Test cannot be converted to Test \n' +
                    ' ```\n' +
                    '\n' +
                    'Even though iObj and sObj are of type Test, they are the references to different types because their type parameters differ. Generics add type safety\n' +
                    'through this and prevent errors.\n' +
                    '\n' +
                    '### Type Parameters in Java Generics\n' +
                    '\n' +
                    'The type parameters naming conventions are important to learn generics thoroughly. The common type parameters are as follows:\n' +
                    '\n' +
                    '- T – Type\n' +
                    '- E – Element\n' +
                    '- K – Key\n' +
                    '- N – Number\n' +
                    '- V – Value\n' +
                    '\n' +
                    '### Advantages of Generics:\n' +
                    '\n' +
                    'Programs that use Generics has got many benefits over non-generic code.\n' +
                    '\n' +
                    '1. **Code Reuse:** We can write a method/class/interface once and use it for any type we want.\n' +
                    '2. **Type Safety:** Generics make errors to appear compile time than at run time (It’s always better to know problems in your code at compile time\n' +
                    '   rather than making your code fail at run time). Suppose you want to create an ArrayList that store name of students, and if by mistake the\n' +
                    '   programmer adds an integer object instead of a string, the compiler allows it. But, when we retrieve this data from ArrayList, it causes problems\n' +
                    '   at runtime.\n' +
                    '\n' +
                    '```java\n' +
                    'import java.util.*;\n' +
                    '\n' +
                    'class Test\n' +
                    '{\n' +
                    '   public static void main(String[] args)\n' +
                    '   {\n' +
                    '      // Creatinga an ArrayList without any type specified\n' +
                    '      ArrayList al = new ArrayList();\n' +
                    '\n' +
                    '      al.add("Sachin");\n' +
                    '      al.add("Rahul");\n' +
                    '      al.add(10); // Compiler allows this\n' +
                    '\n' +
                    '      String s1 = (String) al.get(0);\n' +
                    '      String s2 = (String) al.get(1);\n' +
                    '\n' +
                    '      // Causes Runtime Exception\n' +
                    '      String s3 = (String) al.get(2);\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n' +
                    '**Output:**\n' +
                    '\n' +
                    '```text\n' +
                    'Exception in thread "main" java.lang.ClassCastException: \n' +
                    '   java.lang.Integer cannot be cast to java.lang.String\n' +
                    '    at Test.main(Test.java:19)\n' +
                    '```\n' +
                    '\n' +
                    '### How do Generics Solve this Problem?\n' +
                    '\n' +
                    'When defining ArrayList, we can specify that this list can take only String objects.\n' +
                    '\n' +
                    '```java\n' +
                    'import java.util.*;\n' +
                    '\n' +
                    'class Test\n' +
                    '{\n' +
                    '   public static void main(String[] args)\n' +
                    '   {\n' +
                    '      // Creating a an ArrayList with String specified\n' +
                    '      ArrayList<String> al = new ArrayList<String>();\n' +
                    '\n' +
                    '      al.add("Sachin");\n' +
                    '      al.add("Rahul");\n' +
                    '\n' +
                    '      // Now Compiler doesn\'t allow this\n' +
                    '      al.add(10);\n' +
                    '\n' +
                    '      String s1 = (String) al.get(0);\n' +
                    '      String s2 = (String) al.get(1);\n' +
                    '      String s3 = (String) al.get(2);\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n' +
                    '**Output**\n' +
                    '\n' +
                    '```text\n' +
                    '15: error: no suitable method found for add(int)\n' +
                    '        al.add(10); \n' +
                    '          ^\n' +
                    '```\n' +
                    '\n' +
                    '3. **Individual Type Casting is not needed:** If we do not use generics, then, in the above example, every time we retrieve data from ArrayList, we\n' +
                    '   have\n' +
                    '   to typecast it. Typecasting at every retrieval operation is a big headache. If we already know that our list only holds string data, we need not\n' +
                    '   typecast it every time.\n' +
                    '\n' +
                    '```java\n' +
                    'import java.util.*;\n' +
                    '\n' +
                    'class Test\n' +
                    '{\n' +
                    '   public static void main(String[] args)\n' +
                    '   {\n' +
                    '      // Creating a an ArrayList with String specified\n' +
                    '      ArrayList<String> al = new ArrayList<String>();\n' +
                    '\n' +
                    '      al.add("Sachin");\n' +
                    '      al.add("Rahul");\n' +
                    '\n' +
                    '      // Typecasting is not needed\n' +
                    '      String s1 = al.get(0);\n' +
                    '      String s2 = al.get(1);\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n' +
                    '4. **Generics Promotes Code Reusability:** With the help of generics in Java, we can write code that will work with different types of data. For\n' +
                    '   example,\n' +
                    '\n' +
                    '   Let’s say we want to Sort the array elements of various data types like int, char, String etc.\n' +
                    '\n' +
                    '   Basically we will be needing different functions for different data types.\n' +
                    '\n' +
                    '   For simplicity, we will be using Bubble sort.\n' +
                    '\n' +
                    '   But by using Generics, we can achieve the code reusability feature.\n' +
                    '\n' +
                    '```java\n' +
                    'public class GFG\n' +
                    '{\n' +
                    '   public static void main(String[] args)\n' +
                    '   {\n' +
                    '      Integer[] a = { 100, 22, 58, 41, 6, 50 };\n' +
                    '      Character[] c = { \'v\', \'g\', \'a\', \'c\', \'x\', \'d\', \'t\' };\n' +
                    '      String[] s = { "Virat", "Rohit", "Abhinay", "Chandu", "Sam", "Bharat", "Kalam" };\n' +
                    '      System.out.print("Sorted Integer array :  ");\n' +
                    '      sort_generics(a);\n' +
                    '      System.out.print("Sorted Character array :  ");\n' +
                    '      sort_generics(c);\n' +
                    '      System.out.print("Sorted String array :  ");\n' +
                    '      sort_generics(s);\n' +
                    '   }\n' +
                    '\n' +
                    '   public static <T extends Comparable<T>> void sort_generics(T[] a)\n' +
                    '   {\n' +
                    '      //As we are comparing the Non-primitive data types\n' +
                    '      //we need to use Comparable class\n' +
                    '      //Bubble Sort logic\n' +
                    '      for (int i = 0; i < a.length - 1; i++)\n' +
                    '      {\n' +
                    '         for (int j = 0; j < a.length - i - 1; j++)\n' +
                    '         {\n' +
                    '            if (a[j].compareTo(a[j + 1]) > 0)\n' +
                    '            {\n' +
                    '               swap(j, j + 1, a);\n' +
                    '            }\n' +
                    '         }\n' +
                    '      }\n' +
                    '\n' +
                    '      // Printing the elements after sorted\n' +
                    '      for (T i : a)\n' +
                    '      {\n' +
                    '         System.out.print(i + ", ");\n' +
                    '      }\n' +
                    '      System.out.println();\n' +
                    '   }\n' +
                    '\n' +
                    '   public static <T> void swap(int i, int j, T[] a)\n' +
                    '   {\n' +
                    '      T t = a[i];\n' +
                    '      a[i] = a[j];\n' +
                    '      a[j] = t;\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n' +
                    '**Output:**\n' +
                    '\n' +
                    '```text\n' +
                    'Sorted Integer array :  6, 22, 41, 50, 58, 100, \n' +
                    'Sorted Character array :  a, c, d, g, t, v, x, \n' +
                    'Sorted String array :  Abhinay, Bharat, Chandu, Kalam, Rohit, Sam, Virat\n' +
                    '```\n' +
                    '\n' +
                    'Here, we have created a generics method. This same method can be used to perform operations on integer data, string data, and so on.\n' +
                    '\n' +
                    '5. **Implementing Generic Algorithms:** By using generics, we can implement algorithms that work on different types of objects, and at the same, they\n' +
                    '   are type-safe too.',
            }
        case "Serialization":
            return {
                mdFileData: '**Serialization** is the conversion of the state of an object into a byte stream; deserialization does the opposite. Stated differently, serialization \n' +
                    'is the conversion of a Java object into a static stream (sequence) of bytes, which we can then save to a database or transfer over a network. \n' +
                    ' \n' +
                    '![Serialization](https://  req.headers.host  /assets/java/gettingDeeper/serialization.png)\n' +
                    ' \n' +
                    'The serialization process is instance-independent; for example, we can serialize objects on one platform and deserialize them on another. Classes that \n' +
                    'are eligible for serialization need to implement a special marker interface, Serializable. \n' +
                    ' \n' +
                    'Both ObjectInputStream and ObjectOutputStream are high level classes that extend java.io.InputStream and java.io.OutputStream, respectively. \n' +
                    'ObjectOutputStream can write primitive types and graphs of objects to an OutputStream as a stream of bytes. We can then read these streams using \n' +
                    'ObjectInputStream. \n' +
                    ' \n' +
                    'The most important method in ObjectOutputStream is: \n' +
                    ' \n' +
                    '```java\n' +
                    'public final void writeObject(Object o)throws IOException; \n' +
                    '``` \n' +
                    ' \n' +
                    'This method takes a serializable object and converts it into a sequence (stream) of bytes. Similarly, the most important method in ObjectInputStream \n' +
                    'is: \n' +
                    ' \n' +
                    '```java \n' +
                    'public final Object readObject()throws IOException,ClassNotFoundException; \n' +
                    '``` \n' +
                    ' \n' +
                    'This method can read a stream of bytes and convert it back into a Java object. It can then be cast back to the original object. \n' +
                    ' \n' +
                    'Let\\s illustrate serialization with a Person class. Note that static fields belong to a class (as opposed to an object) and are not serialized. Also, \n' +
                    'note that we can use the keyword transient to ignore class fields during serialization: \n' +
                    ' \n' +
                    '```java \n' +
                    'public class Person implements Serializable \n' +
                    '{ \n' +
                    '    private static final long serialVersionUID = 1L; \n' +
                    '    static String country = "ITALY"; \n' +
                    '    private int age; \n' +
                    '    private String name; \n' +
                    '    transient int height; \n' +
                    '    // getters and setters \n' +
                    '} \n' +
                    '``` \n' +
                    ' \n' +
                    'The test below shows an example of saving an object of type Person to a local file, and then reading the value back in: \n' +
                    ' \n' +
                    '```java \n' +
                    '@Test public void whenSerializingAndDeserializing_ThenObjectIsTheSame()throws IOException,ClassNotFoundException{ \n' +
                    '    Person person=new Person(); \n' +
                    '    person.setAge(20); \n' +
                    '    person.setName("Joe"); \n' +
                    '     \n' +
                    '    FileOutputStream fileOutputStream=new FileOutputStream("yourfile.txt"); \n' +
                    '    ObjectOutputStream objectOutputStream=new ObjectOutputStream(fileOutputStream); \n' +
                    '    objectOutputStream.writeObject(person); \n' +
                    '    objectOutputStream.flush(); \n' +
                    '    objectOutputStream.close(); \n' +
                    '     \n' +
                    '    FileInputStream fileInputStream=new FileInputStream("yourfile.txt"); \n' +
                    '    ObjectInputStream objectInputStream=new ObjectInputStream(fileInputStream); \n' +
                    '    Person p2=(Person)objectInputStream.readObject(); \n' +
                    '    objectInputStream.close(); \n' +
                    '     \n' +
                    '    assertTrue(p2.getAge()==person.getAge()); \n' +
                    '    assertTrue(p2.getName().equals(person.getName())); \n' +
                    '} \n' +
                    '``` \n' +
                    ' \n' +
                    'We used ObjectOutputStream for saving the state of this object to a file using FileOutputStream. The file “yourfile.txt” is created in the project \n' +
                    'directory. This file is then loaded using FileInputStream. ObjectInputStream picks this stream up and converts it into a new object called p2. \n' +
                    ' \n' +
                    'Finally, we\\ll test the state of the loaded object, and ensure it matches the state of the original object. \n' +
                    ' \n' +
                    '> Note that we have to explicitly cast the loaded object to a Person type. \n' +
                    ' \n' +
                    '### Java Serialization Caveats \n' +
                    ' \n' +
                    'There are some caveats which concern serialization in Java. \n' +
                    ' \n' +
                    '#### 1. Inheritance and Composition \n' +
                    ' \n' +
                    'When a class implements the java.io.Serializable interface, all its sub-classes are serializable as well. Conversely, when an object has a reference \n' +
                    'to another object, these objects must implement the Serializable interface separately, or else a NotSerializableException will be thrown: \n' +
                    ' \n' +
                    '```java \n' +
                    'public class Person implements Serializable \n' +
                    '{ \n' +
                    '    private int age; \n' +
                    '    private String name; \n' +
                    '    private Address country; // must be serializable too \n' +
                    '} \n' +
                    '``` \n' +
                    ' \n' +
                    'If one of the fields in a serializable object consists of an array of objects, then all of these objects must be serializable as well, or else a \n' +
                    'NotSerializableException will be thrown. \n' +
                    ' \n' +
                    '#### 2. Serial Version UID \n' +
                    ' \n' +
                    '**The JVM associates a version (long) number with each serializable class.** We use it to verify that the saved and loaded objects have the same \n' +
                    'attributes, and thus are compatible on serialization. \n' +
                    ' \n' +
                    'Most IDEs can generate this number automatically, and it\\s based on the class name, attributes, and associated access modifiers. Any changes result in \n' +
                    'a different number can cause an InvalidClassException. \n' +
                    ' \n' +
                    'If a serializable class doesn declare a serialVersionUID, the JVM will generate one automatically at run-time. However, it\\s highly recommended that \n' +
                    'each class declares its serialVersionUID, as the generated one is compiler dependent and thus may result in unexpected InvalidClassExceptions. \n' +
                    ' \n' +
                    '#### 3. Custom Serialization in Java \n' +
                    ' \n' +
                    'Java specifies a default way to serialize objects, but Java classes can override this default behavior. Custom serialization can be particularly \n' +
                    'useful when trying to serialize an object that has some unserializable attributes. We can do this by providing two methods inside the class that we \n' +
                    'want to serialize: \n' +
                    ' \n' +
                    '```java \n' +
                    'private void writeObject(ObjectOutputStream out)throws IOException; \n' +
                    '``` \n' +
                    ' \n' +
                    'and \n' +
                    ' \n' +
                    '```java \n' +
                    'private void readObject(ObjectInputStream in)throws IOException,ClassNotFoundException; \n' +
                    '``` \n' +
                    ' \n' +
                    'With these methods, we can serialize the unserializable attributes into other forms that we can serialize: \n' +
                    ' \n' +
                    '```java \n' +
                    'public class Employee implements Serializab \n' +
                    '{ \n' +
                    '    private static final long serialVersionUID = 1L; \n' +
                    '    private transient Address address; \n' +
                    '    private Person person; \n' +
                    '     \n' +
                    '    // setters and getters\n' +
                    '    private void writeObject(ObjectOutputStream oos) throws IOException \n' +
                    '    { \n' +
                    '    oos.defaultWriteObject(); \n' +
                    '    oos.writeObject(address.getHouseNumber()); \n' +
                    '    } \n' +
                    '     \n' +
                    '    private void readObject(ObjectInputStream ois) throws ClassNotFoundException, IOException \n' +
                    '    { \n' +
                    '    ois.defaultReadObject(); \n' +
                    '    Integer houseNumber = (Integer) ois.readObject(); \n' +
                    '    Address a = new Address(); \n' +
                    '    a.setHouseNumber(houseNumber); \n' +
                    '    this.setAddress(a); \n' +
                    '    } \n' +
                    '} \n' +
                    '``` \n' +
                    '\n' +
                    '```java \n' +
                    'public class Address\n' +
                    '{\n' +
                    '    private int houseNumber;\n' +
                    '    \n' +
                    '    public int getHouseNumber()\n' +
                    '    {\n' +
                    '        return houseNumber;\n' +
                    '    }\n' +
                    '    \n' +
                    '    public void setHouseNumber(int houseNumber)\n' +
                    '    {\n' +
                    '        this.houseNumber = houseNumber;\n' +
                    '    }\n' +
                    '} \n' +
                    '``` \n' +
                    ' \n' +
                    'We can run the following unit test to test this custom serialization: \n' +
                    ' \n' +
                    '```java \n' +
                    '@Test public void whenCustomSerializingAndDeserializing_ThenObjectIsTheSame()throws IOException,ClassNotFoundException \n' +
                    '{ \n' +
                    '    Person p=new Person(); \n' +
                    '    p.setAge(20); \n' +
                    '    p.setName("Joe"); \n' +
                    '     \n' +
                    '    Address a=new Address(); \n' +
                    '    a.setHouseNumber(1); \n' +
                    '     \n' +
                    '    Employee e=new Employee(); \n' +
                    '    e.setPerson(p); \n' +
                    '    e.setAddress(a); \n' +
                    '     \n' +
                    '    FileOutputStream fileOutputStream=new FileOutputStream("yourfile2.txt"); \n' +
                    '    ObjectOutputStream objectOutputStream=new ObjectOutputStream(fileOutputStream); \n' +
                    '    objectOutputStream.writeObject(e); \n' +
                    '    objectOutputStream.flush(); \n' +
                    '    objectOutputStream.close(); \n' +
                    '     \n' +
                    '    FileInputStream fileInputStream=new FileInputStream("yourfile2.txt"); \n' +
                    '    ObjectInputStream objectInputStream=new ObjectInputStream(fileInputStream); \n' +
                    '    Employee e2=(Employee)objectInputStream.readObject(); \n' +
                    '    objectInputStream.close(); \n' +
                    '     \n' +
                    '    assertTrue( \n' +
                    '    e2.getPerson().getAge()==e.getPerson().getAge()); \n' +
                    '    assertTrue( \n' +
                    '    e2.getAddress().getHouseNumber()==e.getAddress().getHouseNumber()); \n' +
                    '} \n' +
                    '``` \n' +
                    ' \n' +
                    'In this code, we can see how to save some unserializable attributes by serializing Address with custom serialization. Note that we must mark the \n' +
                    'unserializable attributes as transient to avoid the NotSerializableException. \n',
            }
        case "NetworkingAndSockets":
            return {
                mdFileData:'**Java Networking**\n' +
                    '\n' +
                    'Java sockets are equivalent to Java networking.\n' +
                    '\n' +
                    'Sockets are the basic building blocks of network communication in Java. They are used to establish a\n' +
                    'two-way communication link between two programs running on different computers on a network using TCP.\n' +
                    '\n' +
                    'The Java networking API provides a set of classes and interfaces for socket programming. The most important classes are the Socket class and the\n' +
                    'ServerSocket class. The Socket class represents a socket endpoint, while the ServerSocket class represents a server socket that listens for incoming\n' +
                    'connections.\n' +
                    '\n' +
                    'To use sockets for network communication, you first need to create a Socket object. This can be done by connecting to a remote server socket or by\n' +
                    'accepting an incoming connection from a remote client. Once you have a Socket object, you can use it to read and write data to and from the remote\n' +
                    'host.\n' +
                    '\n' +
                    '```java\n' +
                    'import java.io.IOException;\n' +
                    'import java.io.InputStream;\n' +
                    'import java.io.OutputStream;\n' +
                    'import java.net.Socket;\n' +
                    '\n' +
                    'public class SocketClient\n' +
                    '{\n' +
                    '\n' +
                    '   public static void main(String[] args) throws IOException\n' +
                    '   {\n' +
                    '      // Create a socket object and connect to the server\n' +
                    '      Socket socket = new Socket("localhost", 8080);\n' +
                    '\n' +
                    '      // Get the input and output streams for the socket\n' +
                    '      InputStream in = socket.getInputStream();\n' +
                    '      OutputStream out = socket.getOutputStream();\n' +
                    '\n' +
                    '      // Write a message to the server\n' +
                    '      out.write("Hello, world!".getBytes());\n' +
                    '\n' +
                    '      // Read the response from the server\n' +
                    '      byte[] buffer = new byte[1024];\n' +
                    '      int read = in.read(buffer);\n' +
                    '\n' +
                    '      // Print the response from the server\n' +
                    '      System.out.println(new String(buffer, 0, read));\n' +
                    '\n' +
                    '      // Close the socket\n' +
                    '      socket.close();\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n' +
                    'This program creates a socket object and connects to the server running on localhost on port 8080. It then writes the message "Hello, world!" to the\n' +
                    'server and reads the response. The response is then printed to the console.\n' +
                    '\n' +
                    'Java sockets are a powerful tool for network communication. They can be used to develop a wide variety of network applications, such as web servers,\n' +
                    'chat clients, and file transfer programs.\n' +
                    '\n' +
                    'The java.net package provides support for the two common network protocols:\n' +
                    '\n' +
                    '1. **TCP:** TCP stands for Transmission Control Protocol, which allows for reliable communication between two applications. TCP is typically used over\n' +
                    '   the Internet Protocol, which is referred to as TCP/IP.\n' +
                    '2. **UDP:** UDP stands for User Datagram Protocol, a connection-less protocol that allows for packets of data to be transmitted between applications.\n' +
                    '\n' +
                    'A client program creates a socket on its end of the communication and attempts to connect that socket to a server.\n' +
                    '\n' +
                    'When the connection is made, the server creates a socket object on its end of the communication. The client and the server can now communicate by\n' +
                    'writing to and reading from the socket.\n' +
                    '\n' +
                    'The java.net.Socket class represents a socket, and the java.net.ServerSocket class provides a mechanism for the server program to listen for clients\n' +
                    'and establish connections with them.\n' +
                    '\n' +
                    'The following steps occur when establishing a TCP connection between two computers using sockets:\n' +
                    '\n' +
                    '1. The server invokes the accept() method of the ServerSocket class. This method waits until a client connects to the server on the given port.\n' +
                    '2. After the server is waiting, a client instantiates a Socket object, specifying the server name and the port number to connect to.\n' +
                    '3. The constructor of the Socket class attempts to connect the client to the specified server and the port number. If communication is established,\n' +
                    '   the client now has a Socket object capable of communicating with the server.\n' +
                    '4. On the server side, the accept() method returns a reference to a new socket on the server that is connected to the client\'s socket.\n' +
                    '\n' +
                    'After the connections are established, communication can occur using I/O streams. Each socket has both an OutputStream and an InputStream. The\n' +
                    'client\'s OutputStream is connected to the server\'s InputStream, and the client\'s InputStream is connected to the server\'s OutputStream.\n' +
                    '\n' +
                    '### Socket Client Example\n' +
                    '\n' +
                    '```java\n' +
                    '// File Name GreetingClient.java\n' +
                    '\n' +
                    'import java.net.*;\n' +
                    'import java.io.*;\n' +
                    '\n' +
                    'public class GreetingClient\n' +
                    '{\n' +
                    '\n' +
                    '   public static void main(String[] args)\n' +
                    '   {\n' +
                    '      String serverName = args[0];\n' +
                    '      int port = Integer.parseInt(args[1]);\n' +
                    '      try\n' +
                    '      {\n' +
                    '         System.out.println("Connecting to " + serverName + " on port " + port);\n' +
                    '         Socket client = new Socket(serverName, port);\n' +
                    '\n' +
                    '         System.out.println("Just connected to " + client.getRemoteSocketAddress());\n' +
                    '         OutputStream outToServer = client.getOutputStream();\n' +
                    '         DataOutputStream out = new DataOutputStream(outToServer);\n' +
                    '\n' +
                    '         out.writeUTF("Hello from " + client.getLocalSocketAddress());\n' +
                    '         InputStream inFromServer = client.getInputStream();\n' +
                    '         DataInputStream in = new DataInputStream(inFromServer);\n' +
                    '\n' +
                    '         System.out.println("Server says " + in.readUTF());\n' +
                    '         client.close();\n' +
                    '      }\n' +
                    '      catch (IOException e)\n' +
                    '      {\n' +
                    '         e.printStackTrace();\n' +
                    '      }\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n' +
                    '### Socket Server Example\n' +
                    '\n' +
                    '```java\n' +
                    'import java.net.*;\n' +
                    'import java.io.*;\n' +
                    '\n' +
                    'public class GreetingServer extends Thread\n' +
                    '{\n' +
                    '   private ServerSocket serverSocket;\n' +
                    '\n' +
                    '   public GreetingServer(int port) throws IOException\n' +
                    '   {\n' +
                    '      serverSocket = new ServerSocket(port);\n' +
                    '      serverSocket.setSoTimeout(10000);\n' +
                    '   }\n' +
                    '\n' +
                    '   public void run()\n' +
                    '   {\n' +
                    '      while (true)\n' +
                    '      {\n' +
                    '         try\n' +
                    '         {\n' +
                    '            System.out.println("Waiting for client on port " + serverSocket.getLocalPort() + "...");\n' +
                    '            Socket server = serverSocket.accept();\n' +
                    '\n' +
                    '            System.out.println("Just connected to " + server.getRemoteSocketAddress());\n' +
                    '            DataInputStream in = new DataInputStream(server.getInputStream());\n' +
                    '\n' +
                    '            System.out.println(in.readUTF());\n' +
                    '            DataOutputStream out = new DataOutputStream(server.getOutputStream());\n' +
                    '            out.writeUTF("Thank you for connecting to " + server.getLocalSocketAddress() + "\\nGoodbye!");\n' +
                    '            server.close();\n' +
                    '\n' +
                    '         }\n' +
                    '         catch (SocketTimeoutException s)\n' +
                    '         {\n' +
                    '            System.out.println("Socket timed out!");\n' +
                    '            break;\n' +
                    '         }\n' +
                    '         catch (IOException e)\n' +
                    '         {\n' +
                    '            e.printStackTrace();\n' +
                    '            break;\n' +
                    '         }\n' +
                    '      }\n' +
                    '   }\n' +
                    '\n' +
                    '   public static void main(String[] args)\n' +
                    '   {\n' +
                    '      int port = Integer.parseInt(args[0]);\n' +
                    '      try\n' +
                    '      {\n' +
                    '         Thread t = new GreetingServer(port);\n' +
                    '         t.start();\n' +
                    '      }\n' +
                    '      catch (IOException e)\n' +
                    '      {\n' +
                    '         e.printStackTrace();\n' +
                    '      }\n' +
                    '   }\n' +
                    '}\n' +
                    '```\n' +
                    '\n',
            }
        default:
            return {
                mdFileData: 'Could not find data for subtopic ' + subTopic,
            }
    }
}
