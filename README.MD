
   
# Event Management System

 # Overview
This project is a comprehensive Event Management System designed to enable users to create, manage, and explore events with ease. It employs JSON Web Tokens (JWT) for secure authentication, ensuring that only authenticated users can perform event-related actions. User data and event data are validated using a robust validator, and all errors are handled gracefully to provide a smooth user experience. The system supports operations such as creating, viewing, filtering, updating, and deleting events. All user and event data are securely stored in user.json and event.json files, respectively. Additionally, the project includes thorough unit testing to ensure the reliability and accuracy of all core functionalities.

- Note: Data is stored in JSON files rather than in databases; these  files are generated automatically upon user registration and event creation.

**Screenshots**

A comprehensive collection of screenshots showcasing the functionality and testing of the system can be found in the screenshots folder. These screenshots provide visual confirmation of the various aspects of the Event Management System:

- Authentication  (Signup, Signin, Signout) success screenshots
- Event creation, viewing, filtering, updating, and deletion screenshots
- Errors gracefully handling Screenshots
-  Validation Check cases Screenshots
- Unit test : pass casese of Signup, Signin, Signout ,Event creation, viewing, filtering, updating, and deletion showcasing 


## Authentication

Authentication in the Event Management Project is handled using JSON Web Tokens (JWT). This ensures that only authenticated users can access certain features, such as creating, updating, and deleting events. JWTs are used to securely transmit user session information between the client and server.

### Signup

To create a new account, users must provide a unique email and password.
The user then signs in by sending a POST request Endpoint and receives a JWT/cookie.
 - **Endpoint:**` POST http://127.0.0.1:3005/api/events/users/signup/`
- **Request Body:**
 ```
{
  "email": "your_email",
  "password": "your_password"
}
```
- **Response:**
 ```
{
    "id": Randomly genrated,
    "email": "your_email",
    "password": "your_hashed _password"
}
```
**Demo**
 ```
{
    "email":"manish11@gmail.com",
    "password":"1234567"
}
 ```

  ```
{
    "id": 8,
    "email": "manish11@gmail.com",
    "password": "2668cadb697f7e037920e287a7c59ae88c82006d1acc9c7d537ca6e4f5ac150c10df4b16b6bfe27c037312f63f72f7d3ef3d535570f1ae9d57ee84de832ace75.4f4c5c310e7d9b21bdbb87c72dc8724c"
} 
```


### Signin
Once registered, users can log into their account using their email and password. Upon successful login, a JWT is issued to the user.
The user then signs in by sending a POST request Endpoint and receives a JWT/cookie.

- **Endpoint:** ` POST http://127.0.0.1:3005/api/events/users/signin/`
Request Body:
 ```
{
  "email": "your_email",
  "password": "your_password"
}
```
- **Response:**
 ```
{
    "id": Randomly genrated,
    "email": "your_email",
    "password": "your_hashed _password"
}
```
  ### Signout:

- **Endpoint:** ` POST http://127.0.0.1:3005/api/events/users/signin/`

## Event operations
Authenticated users can only perform event operations such as create, read, filter, update, and delete.

 ### Create Event:

- **Endpoint:** ` POST http://127.0.0.1:3005/api/events/create/`

- **Request Body:** 
```
{ 
    "title": "string", 
    "description": "string", 
    "startDate": "YYYY-MM-DD",
     "endDate": "YYYY-MM-DD", 
     "totalParticipants": "number"
 }
```

- **Response Body:** 
```
{ 
    "id":"number".
    "title": "string", 
    "description": "string", 
    "startDate": "YYYY-MM-DD",
     "endDate": "YYYY-MM-DD", 
     "totalParticipants": "number"
 }
```

  ### Read/ShowAll Event:

- **Endpoint:** ` GET http://127.0.0.1:3005/api/events/`


- **Response Body:** All the events are shown
```
{ 
    "id":"number".
    "title": "string", 
    "description": "string", 
    "startDate": "YYYY-MM-DD",
     "endDate": "YYYY-MM-DD", 
     "totalParticipants": "number"
 }
```
```
{ 
    "id":"number 1 ".
    "title": "string", 
    "description": "string", 
    "startDate": "YYYY-MM-DD",
     "endDate": "YYYY-MM-DD", 
     "totalParticipants": "number"
 }
```
### Filter Event:
An event may be filtered by providing the title, start date, and end date as queries to the Endpoint listed below.

- **Endpoint:** ` GET http://127.0.0.1:3005/api/events/create/?Query Parameters`
 - **Query Parameters (optional):** { "title": "string", "startDate": "YYYY-MM-DD", "endDate": "YYYY-MM-DD" }


 ### Update Event:

- **Endpoint:** ` PATCH http://127.0.0.1:3005/api/events/update/:id`

- **Request Body:** 
 
```
{ 
    "id":"eventId"
    "title": "string", (optional)
    "description": "string", (optional)
    "startDate": "YYYY-MM-DD",(optional)
     "endDate": "YYYY-MM-DD", (optional)
     "totalParticipants": "number"(optional)
 }
```
Various combinations may be possible based on the needs for the event's update.
```
{ 
    "id":"eventId"
    "title": " updated title"
}
```
- **Response Body:** Updated eEvent as a response
``` 
{ 
    "id":"eventId"".
    "title": "string", 
    "description": "string", 
    "startDate": "YYYY-MM-DD",
     "endDate": "YYYY-MM-DD", 
     "totalParticipants": "number"
 }
```

 ### Delete Event:

- **Endpoint:** ` DELETE http://127.0.0.1:3005/api/events/delete/:id`

## API 
The api of this project is publish in the line give below:
- **POSTMAN:**`https://documenter.getpostman.com/view/24028174/2sA3XQhh1Z` 

### Project Structure [ backend ]
```
/backend
|-- /src
|   |-- /error                  # Directory containing custom error classes used throughout the application
|   |   |-- already-exist-error.js    # Custom error class for handling "already exists" errors, like duplicate entries
|   |   |-- app-error.js               # Base class for all custom application errors
|   |   |-- bad-req-error.js           # Custom error class for handling bad request errors 
|   |   |-- file-error.js              # Custom error class for handling file-related errors
|   |   |-- not-authorized.js          # Custom error class for handling unauthorized access errors
|   |   |-- not-found-error.js         # Custom error class for handling not found errors
|   |   |-- request-validation-error.js # Custom error class for handling request validation errors 
|   |
|   |-- /middleware             # Directory for middleware functions that process requests and responses
|   |   |-- auth-guard.js              # Middleware to protect routes, ensuring only authenticated users can access them
|   |   |-- current-user.js            # Middleware to retrieve and attach the current user to the request object
|   |   |-- error-handler.js           # Middleware for centralized error handling across the application
|   |   |-- validate-request.js        # Middleware for validating incoming request data using defined rules
|   |
|   |-- /model                  # Directory containing data models and test data
|   |   |-- /__test__                 # Folder for storing test data used in unit tests
|   |   |   |-- fake_event.json        # Sample event data used for testing purposes
|   |   |   |-- fake_user.json         # Sample user data used for testing purposes
|   |   |-- event.json                # JSON file for storing event data
|   |   |-- user.json                 # JSON file for storing user data
|   |
|   |-- /routes                 # Directory defining API routes and their corresponding handlers
|   |   |-- /__test__                # Folder containing unit tests for the routes
|   |   |   |-- createEvent.test.js   # Unit test for event creation route
|   |   |   |-- deleteEvent.test.js   # Unit test for event deletion route
|   |   |   |-- showEvent.test.js     # Unit test for retrieving specific event details
|   |   |   |-- signinEvent.test.js   # Unit test for user signin route
|   |   |   |-- signupEvent.test.js   # Unit test for user signup route
|   |   |   |-- updateEvent.test.js   # Unit test for event update route
|   |   |-- /auth                     # Sub-directory for authentication-related routes
|   |   |   |-- auth-signin.js        # Route handler for user signin
|   |   |   |-- auth-signout.js       # Route handler for user signout
|   |   |   |-- auth-signup.js        # Route handler for user signup
|   |   |-- createEvent.js           # Route handler for creating a new event
|   |   |-- deleteEvent.js           # Route handler for deleting an event
|   |   |-- showAllEvent.js          # Route handler for showing all events
|   |   |-- updateEvent.js           # Route handler for updating an event
|   |
|   |-- /utils                  # Utility functions used across different parts of the application
|   |   |-- appendFile.js              # Utility function for appending data to a file
|   |   |-- fileWrite.js               # Utility function for writing data to a file
|   |   |-- filter-event.js            # Utility function for filtering events based on criteria
|   |   |-- password.js                # Utility functions for password hashing and validation
|   |   |-- readFile.js                # Utility function for reading data from a file
|   |
|   |-- /validator              # Directory containing validation rules for various request data
|   |   |-- create-event-rules.js     # Validation rules for creating an event
|   |   |-- signin-rules.js           # Validation rules for user signin
|   |   |-- signup-rules.js           # Validation rules for user signup
|   |   |-- update-event.js           # Validation rules for updating an event
|   |
|   |-- app.js                   # Main application file that sets up and initializes the server
|   |-- index.js                 # Entry point of the application, starts the server
|   |-- .babelrc                 # Configuration file for Babel, used to compile ES6+ JavaScript code
|   |-- .gitignore               # File specifying which files and directories to ignore in version control
|   |-- config.env               # Environment configuration file for sensitive data (e.g., JWT secrets, database URL)
|   |-- jest.config.js           # Configuration file for Jest, the testing framework used for unit tests
|   |-- package-lock.json        # Automatically generated file that locks down the versions of dependencies
|   |-- package.json             # Project metadata, scripts, and dependencies information
                
```

## Unit testing
The project includes comprehensive unit tests for all critical functionalities. These tests are essential for ensuring the reliability and accuracy of the event management system's features. Below is an overview of the unit tests available and instructions on how to run them.

 #### Available Unit Tests
The unit tests are located within the /src/routes/__test__ directory. Each test file corresponds to a specific route or functionality in the application:

- **createEvent.test.js:** Unit test for the event creation route.

    Verifies that events can be created successfully with valid     data.
  Checks for proper handling of invalid data 
- **deleteEvent.test.js:** Unit test for the event deletion route.

Ensures that events can be deleted by authenticated users.
Tests how the system handles attempts to delete non-existent events

- **showEvent.test.js:** Unit test for retrieving specific event details.

Confirms that event details are correctly retrieved based on provided identifiers.

- **signinEvent.test.js:** Unit test for the user signin route.

Checks for appropriate error handling when incorrect credentials are provided.
- **signupEvent.test.js:** Unit test for the user signup route.

Ensures that new users can sign up with valid credentials.
Tests the system's response to duplicate or invalid signup attempts.
- **updateEvent.test.js:** Unit test for the event update route.

Tests how the system handles invalid update data requests.

### Some screenshots shots (See screenshots of all  working functionalities of this project  in Screenshots Directory  )
 
## Homepage

![Homepage](C:\Users\HP\Desktop\youngInnovations - Copy\screenshots\homepage.jpg)

