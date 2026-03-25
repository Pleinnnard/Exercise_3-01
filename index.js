//Import the express module
const express = require('express');

//Create an instance of the express application
const app = express();

//Create a middleware to parse JSON request bodies
app.use(express.json());

const users = [];

//Define a route for the GET request to the path "/getUserInfo"
app.get("/getUserInfo", (request, response) => {
    response.send("Hello World");
});

//Tell the app to listen on port 3000 for incoming requests
app.listen (3000, () => {
    console.log("My app is running");
});

app.post("/user", (request, response) => {
    users.push(request.body);
    console.log(users);
    response.send("User Added Successfully");
    
});

app.get("/user", (request, response) => {
    response.send(users);
});

app.delete("/user/:id", (request, response) => {
    const id = request.params.id;
    const userFound = users.find((user) => user.id == id);
    users.splice(users.indexOf(userFound), 1);
    response.send("User Deleted Successfully");
});

app.get("/user/:id", (request, response) => {
    const id = request.params.id;
    const userFound = users.find((user) => user.id == id);
    response.send(userFound);
});

app.put("/user/:id", (request, response) => {
    const id = request.params.id;
    const requestPwd = request.body.password;
    const requestUserName = request.body.user;
    const userFound = users.find((user) => user.id == id);

    userFound.pwd = requestPwd;
    userFound.name = requestUserName;
    response.send("User Updated Successfully");
});

app.get
app.post
app.put
app.delete