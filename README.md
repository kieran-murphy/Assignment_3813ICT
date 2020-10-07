# Assignment1
https://github.com/kmurp62rulz/Assignment1

# Log-in

The default logins for the assignment are:

email: super@gmail.com

password: 123

email: abc@com.au

password: 123

email: john@gmail.com

password: password


# Installation and running

To install the chat application, locate the src folder in terminal or cmd and run `npm install`. 
After installation, the program can be run by using `ng serve` in the same directory.

To start the server, open another terminal window and locate the 'server' folder. Once inside, run `node server.js` to start.

Make sure mongodb is running whilst using the server by opening a third terminal and running the command `mongod` from any directory.

Finally, go to http://localhost:4200/ in any browser to use the application


# Running tests with Mocha

To test the chat application, run `Mocha test.js` in the terminal


# Documentation

# Data Structures

**JSON File**

The data structure for the JSON file which contains the login information for the first 3 default logins is as follows:

{
  "myarray": [{
      "userid": 1,
      "username": "super",
      "role": "Super Admin",
      "email": "super@gmail.com",
      "password": "123",
      "valid": null
    },
    {
      "userid": 2,
      "username": "abc",
      "role": "Group Admin",
      "email": "abc@com.au",
      "password": "123",
      "valid": null
    }, 
    {
      "userid": 3,
      "username": "john",
      "role": "Group Assis",
      "email": "john@gmail.com",
      "password": "password",
      "valid": null
    }
  ]
}

**MongoDB**

MongoDB is utilised in this project and will start with a blank database on a fresh install with a collection called `users`. This collection contains 7 fields which will be filled by the user. These are: ID (primary key), Username, Email, Role, Password, Group and Channel.

# Version Control

Github is one of the best version control systems available to developers and was chosen for this assignment. This assignment has had multiple updates pushed to github and a full history of previous versions is available in case of errors making the project unresponsive. The git repository itself contains the README.md file along with all essential parts of the node.js project, most importantly the SRC folder containing all HTML, CSS and most front-end related files. The 'server' folder is also of high importance in the project containing the backend code for authentication and sockets.io chat functionality. 

# Angular Architecture

### Components

**Login**: First page displayed on startup, processes user authentication through the server and is the entry point for the rest of the application

**Account**: Allows changes to the current session storage username, email and admin priveleges

**Profile**: Greeting home page, retrieves current session storage and display username, email and admin priveledges

**Create**: Allows the creation of new users, groups and channels in mongoDB, but only with Admin status

**Chat**: Accepts chat messages, processes them through the sockets service and displays messages in real time

**Done**: Simple page which lets the admin user know their input has been accepted and a new user has been created or updated. Redirects back to the "Create" page.

**Block**: Simple page which lets the user they dont have admin priveleges to access the "Create" page reserved for admins.


### Services
One benefit of Angular is the functions which interact with the API being stored in one spot. This allows for a more simple process in calling the  functions in different components. Two services are used in this application: ProductService and SocketService.

**ProductService**: This service handles the creating, listing, deletion etc. of items in the mongoDB database. It includes the getList() function which interacts with the /list API for listing all items, the addProduct() function which interacts with the /add API for adding new items, the deleteProduct() function which interacts with the /deleteItem API for deleting an item, the getItem() function which interacts with the /getItem API for listing a single item, and finally, the updateItem() function which interacts with the /update API for changing items.

**SocketService**: this service is used exclusively in the chat component, which uses functions to send and recieve data through the socket connection. The initSocket() function starts connection by using the SERVER_URL variable. The function send() is used to send new data to other socket connections when it is recieved through user input on the chat application. The onMessage() function uses observables to read new data or messages being sent.

### Server Architecture

**Server.js**: The file `Server.js` processes many functons and acts as the core of the backend processes of the web application. When start it announces it is successfully running on localhost:3000. Sockets, mongoDB and user authentication are processed through the server.

### REST API

| Route  | Description |
| ------------- | ------------- |
| /api/add | Takes inputs from a user and creates a new entry in the mongoDB collection 'users'  |
| /api/api-login | Tests values of a user from the locally stored JSON file making sure the username and password match and updates its value as "true" for use in /api/login-success |
| /api/list | Displays all the users within the mongoDB collection |
| /api/listen | Prints to the console that the server has been started with a timestamp of hours, minutes and seconds |
| /api/login-success | Takes userObj array which contains locally stored values of userid, username, email and role and pushes successfully logged in users to an array called uArray in session storage |
| /api/deleteitem | deletes an item from the mongoDB collection when selected by ID |
| /api/update | updates the selected user in mongoDB collection with values given through user input |



 
