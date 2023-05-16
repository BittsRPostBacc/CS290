/* Notes from Explorations
MVC Patter
Model - View - Controller
Used for applications with UI's

Basic idea: decouple functionality related to the UI from the code that does the work

Model
Layer that manages the apps data
CRUD operations
Classes
Code that maps the data in databases to the classes, and the classes to the data in the database
    - In Mongo data is represented as documents
    - Mapping Mongo Documents to objects in Node
    - Mapping Node objects to Mongo Documents

View
The UI of the app
Displays the data from the app
Web apps are ultimately rendered in HTML and CSS
    - We use REACT framework to do this rendering
Desktop Apps are rendered using the UI toolkit of the platform
View does not directly interact with the Model
    - View send information to the Controller, which talks to the Model

Controller
Layer that connects View to Model
Handles requests from the View layer
Determines how to process the request
    - Decides how to involve the View and Model layers in processing the request
    - Including how the View and Model might be updated due to the request
In an Express app, Controller is implemented by Route Handlers
  Route Handlers:
    Receive requests
    Call functions to perform CRUD operations on the Model
    Send back responses to update the View

 */