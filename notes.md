# Revisit:
5, 25
# Notes!
## Git Basics
VS Code is has very useful tools to work with GIT. You have to make sure that you have something written in the updates made file for it to commit.
You pull using GIT Bash, not VS Code. 

 In the following code, what does the link element do
      Adds a link to another file or website.
      
In the following code,  what does a div tag do?
      Defines a division or section in an HTML document.
      
In the following code, what is the difference between the #title and .grid selector?
      # is an id selector. Only one element can have a particular id. 
      . is a class identifier. Multiple elements can share the same class. 
      
In the following code, what is the difference between padding and margin?
      Padding represents the amount of inner space an element has, while the margin is whitespace available surrounding an element.
      
Given this HTML and this CSS how will the images be displayed using flex?
      Flex allows the elements to change with the size of the page.
    
What does the following padding CSS do?
        
What does the following code using arrow syntax function declaration do?
        shorter way of riding function. object = function parameters => {function}

What does the following code using map with an array output?
        Applies a function to each element of an array, adding them to a new array. Ex from chat: const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

What does the following code output using getElementByID and addEventListener?
  

What does the following line of Javascript do using a # selector?
  '#' is a type identifier, so it will affect the singular item with that id.

Which of the following are true? (mark all that are true about the DOM)
   DOM: Document Object Model. represents web page as tree-like structure of objects, where each object corresponds to an element in the web page, such as HTML tags, attributes and text content.
   Tree Structure:
   
    The DOM represents the web page's structure as a hierarchical tree, with the root of the tree being the <html> element. Below that, you have the <head> and <body> elements, and within those, you have various other elements such as headings, paragraphs, links, images, and more.
   Nodes:

    The elements, attributes, and text content in the DOM are represented as nodes. Nodes can be of several types, including element nodes, attribute nodes, and text nodes.
    Element nodes represent HTML elements, such as <div>, <p>, or <a>.
    Attribute nodes represent attributes of elements, such as the "src" attribute of an <img> element.
    Text nodes represent the actual text content within elements.

Accessing and Manipulating the DOM:

    Web developers can use programming languages like JavaScript to access and manipulate the DOM. This enables dynamic behavior on web pages.
    Common operations include selecting elements, changing their content or attributes, adding or removing elements, and responding to user interactions (e.g., clicking a button to change text on a page).

Event Handling:

    The DOM allows developers to register event listeners on DOM elements to respond to user interactions, such as clicks, mouse movements, and keyboard input. Event handling is a crucial aspect of creating interactive web pages.

Cross-Browser Compatibility:

    The DOM is designed to be a platform-independent and language-neutral interface, making it compatible with various web browsers. However, there can be some browser-specific differences in how the DOM is implemented, so developers often use libraries like jQuery to smooth out these differences.

Dynamic Web Pages:

    By manipulating the DOM, web developers can create dynamic and interactive web pages. This is the foundation for many modern web applications, which use JavaScript to update the DOM in response to user actions or data changes.
   
By default, the HTML span element has a default CSS display property value of: 
   inline
   
How would you use CSS to change all the div elements to have a background color of red?
  div{ background-color: red;}

How would you display an image with a hyperlink in HTML?
<a href="your-link-url">
  <img src="image-source-url" alt="Image Description">
</a>


In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
  Content, padding, border, margin

Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
  Some identifier that would only affect troubl.

What will the following code output when executed using a for loop and console.log?
  

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
  function changeTextColor() {
      const element = document.getElementById("byu");
      element.style.color = "green";
    }

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
    Paragraph: <p> - Used to define a paragraph of text.
    Ordered List: <ol> - Used to create an ordered (numbered) list.
    Unordered List: <ul> - Used to create an unordered (bulleted) list.
    Second Level Heading: <h2> - Represents a second-level (subheading) heading in HTML.
    First Level Heading: <h1> - Represents the highest-level (main) heading in HTML.
    Third Level Heading: <h3> - Represents a third-level heading.

How do you declare the document type to be html?
  <!DOCTYPE html> <html></html>

What is valid javascript syntax for if, else, for, while, switch statements?
  if(condition){}else{}
  for(initialization; condition; incrememt/decrement){}
  while(condition){}
  do{}while(condition)
  switch(expression){
     case value1: //code to execute if expression equals value1
     etc
  }

What is the correct syntax for creating a javascript object?
  obj: "value",
  class.obj: "value",
  this.obj: "value",
  constructors
  
Is is possible to add new properties to javascript objects?
  Yes.
  Dot notation: person.firstName = "John";
  bracket notation: person["firstName"] = "John";
  Object Literal Syntax: (basically a constructor) firstName: "John";
  Object Assign: Object.assign(person, { lastname: "Doe" });

If you want to include JavaScript on an HTML page, which tag do you use?
  <Script></Script>

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
 In the html set span. Then 
 // Get the <span> element by its ID
 const animalElement = document.getElementById("animal");

 // Set the text content of the element to "crow"
 animalElement.textContent = "crow";


Which of the following correctly describes JSON?
 JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used for transmitting data between a server and a web application, as well as for configuration files and data storage. JSON is a text-based, language-independent format that has become a common data format with widespread support in various programming languages.

 Here are some key characteristics and features of JSON:

    Data Structure: JSON represents data in a key-value pair format. Data is stored as a collection of attribute-value pairs, where each attribute (key) is a string, and its value can be a string, number, object, array, boolean, or null.

    Human-Readable: JSON is designed to be easy to read and write for both humans and machines. It uses a simple and intuitive syntax, making it straightforward for developers to work with.

    Data Types: JSON supports a limited set of data types, including strings, numbers, objects, arrays, booleans, null, and nested combinations of these types. Objects and arrays can be used to structure and nest data.

    Lightweight: JSON is a minimalistic format, and its compact syntax results in small file sizes and efficient data transmission over the network.

    Language-Independent: JSON is not tied to any specific programming language and can be used with various languages, including JavaScript, Python, Ruby, Java, C#, and many others.

    Extensible: JSON is extensible and allows for custom data types or structures using objects. However, for interoperability and compatibility, it is recommended to stick to the standard data types.

    Supported by Browsers: JSON is natively supported by web browsers, making it an excellent choice for exchanging data between web applications and web servers using JavaScript.

    Example:

    Here's an example of JSON data representing information about a person:

    json

    {
      "name": "John Doe",
      "age": 30,
      "isStudent": false,
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA"
      },
      "hobbies": ["reading", "traveling"]
    }

 JSON is widely used for data serialization, configuration files, APIs, and many other data exchange scenarios in software development due to its simplicity, versatility, and platform independence. It has become a de facto standard for data interchange on the web and in modern software systems.

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
    chmod: Used to change the permissions (read, write, execute) of files and directories in a Unix-like operating system.

    pwd (Print Working Directory): Displays the current directory or folder path in the terminal.

    cd (Change Directory): Used to navigate the file system by changing the current working directory to another directory.

    ls (List): Lists the files and directories in the current directory.

    vim: A text editor for the command line. It's a highly configurable and powerful editor for editing text files.

    nano: Another command-line text editor, which is more user-friendly for those not familiar with Vim or other complex editors.

    mkdir (Make Directory): Creates a new directory or folder.

    mv (Move): Used to move or rename files and directories. It can also be used for moving files from one location to another.

    rm (Remove): Deletes files and directories. Be cautious with this command, as deleted files are often not recoverable.

    man (Manual): Used to access the manual pages for various commands, providing detailed information and usage instructions for those commands.

    ssh (Secure Shell): Allows you to securely connect to and manage remote servers over a network. It's commonly used for remote access and administration.

    ps (Process Status): Displays information about running processes, including their process IDs (PIDs) and resource usage.

    wget: A command-line utility for downloading files from the web. It supports HTTP, HTTPS, and FTP protocols.

    sudo (Superuser Do): Used to execute commands with elevated privileges. It allows a permitted user to execute a command as the superuser or another user, as specified by the security policy.
 Each of these commands serves a specific purpose and can be valuable when working in a terminal or command-line environment, especially in Unix-like operating systems such as Linux or macOS. It's important to use them carefully, as some of these commands can have significant consequences, like modifying or deleting files and directories. Always ensure you have the necessary permissions and backups before making any changes to your file system.


Which of the following console command creates a remote shell session?
 ssh

Which of the following is true when the -la parameter is specified for the ls console command?
 long all. Lists detailed info on all files, including hidden ones.
 
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
    Top-Level Domain (TLD): The top-level domain is the last part of the domain name, and in this case, it is "click." The TLD is the highest level of the domain hierarchy and typically represents the type or purpose of the domain (e.g., .com, .org, .net, .edu, .gov, .io, .click, etc.).

    Subdomain: A subdomain is a part of a larger domain and is added as a prefix to the main domain. In this domain name, "banana" is a subdomain of "fruit." So, "banana" is a subdomain.

    Root Domain (Second-Level Domain): The root domain is the main or primary domain to which subdomains are added. In this case, "fruit" is the root domain because it is the base domain to which the subdomain "banana" is attached.

 So, to summarize:

    Top-Level Domain (TLD): "click"
    Subdomain: "banana"
    Root Domain: "fruit"
  
Is a web certificate is necessary to use HTTPS.
 Yes, for security, authentication, search engine ranking, browser compatibility, and data integrity.

Can a DNS A record can point to an IP address or another A record.
  A DNS A record (Address record) is used to map a domain name to an IPv4 address. It associates a domain name with a specific IPv4 address. A DNS A record cannot directly point to another A record. However, you can achieve a similar effect indirectly by setting up a CNAME (Canonical Name) record to reference another domain name, and that domain name can have an associated A record.

Port 443, 80, 22 is reserved for which protocol?
    Port 443: This port is commonly used for the HTTPS (Hypertext Transfer Protocol Secure) protocol. HTTPS is the secure version of HTTP and is used for secure communication over the internet. When you access a website over HTTPS, your web browser communicates with the web server on port 443 to ensure secure, encrypted data transmission.

    Port 80: Port 80 is typically used for HTTP (Hypertext Transfer Protocol), which is the standard protocol for unencrypted web communication. When you access a website without specifying a port number in the URL, your web browser communicates with the web server on port 80 by default.

    Port 22: Port 22 is typically used for the SSH (Secure Shell) protocol. SSH is a secure network protocol used for secure remote login, remote command execution, and secure file transfer between a client and a server. It provides secure access to a remote computer over an unsecured network.

What will the following code using Promises output when executed?

// Function that simulates an asynchronous task (e.g., fetching data from a server)
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful data retrieval
      const data = { id: 1, name: "John" };
      resolve(data);

      // Simulate an error
      // reject("Failed to fetch data");
    }, 2000); // Simulating a 2-second delay
  });
}

// Using the Promise to fetch data
fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

Explanation:

    The fetchData function is defined to simulate an asynchronous task. In real-world scenarios, this task might involve making an HTTP request to a server to fetch data. For demonstration purposes, we've used setTimeout to simulate a 2-second delay before resolving the Promise.

    Inside the fetchData function, a new Promise is created. A Promise represents a value that may be available now, or in the future, or never. It can either be in a resolved state (fulfilled) or a rejected state (error).

    Within the Promise, setTimeout is used to simulate the asynchronous operation. After 2 seconds, the Promise either resolves with the data object or rejects with an error message, depending on the comment (error simulation) inside the code.

    Outside the fetchData function, we call the fetchData function to initiate the asynchronous operation. We use the .then() method to specify a callback function to execute when the Promise is resolved successfully. We also use the .catch() method to specify a callback function to handle any errors if the Promise is rejected.

    When the Promise is resolved (i.e., data is successfully fetched), the .then() callback is executed. It logs the fetched data to the console.

    If the Promise is rejected (e.g., due to a network error or another issue), the .catch() callback is executed. It logs an error message to the console.
