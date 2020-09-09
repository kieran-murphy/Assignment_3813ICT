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


# Documentation

# Data Structure

The data structure for the JSON which contains the login information for the first 3 default logins is as follows:

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
    }, {
      "userid": 3,
      "username": "john",
      "role": "Group Assis",
      "email": "john@gmail.com",
      "password": "password",
      "valid": null
    }
  ]
}

# Version Control

Github is one of the best version control systems available to developers and was chosen for this assignment. This assignment has had multiple updates pushed to github and a full history of previous versions is available in case of errors making the project unresponsive. The git repository itself contains the README.md file along with all essential parts of the node.js project, most importantly the SRC folder containing all HTML, CSS and most front-end related files. The 'server' folder is also of high importance in the project containing the backend code for authentication and sockets.io chat functionality. 

# Angular components architecture

login component: processes the log-in authentication based on a series of data in JSON format 
account component: accepts changes to the current session storage username, email and admin priveledges
profile component: retrieves current session storage and display username, email and admin priveledges
chat component: accepts chat messages, processes them through the sockets service and displays messages in real time
sockets service: the service that sends messages from the chat component to the NodeJs server side and retrieves messages for display on the same chat component
server.js server: handles back end processing for the project, allowing user authentication and real time chat tp function
