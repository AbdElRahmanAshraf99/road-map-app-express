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
        default:
            return {
                mdFileData: 'Could not find data for subtopic ' + subTopic,
            }
    }
}
