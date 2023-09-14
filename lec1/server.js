const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); //to parse json coming from client

const app = express();
app.use(bodyParser.json()); //bodyParser's json method

let fruits = ["Apple", "Orange", "Banana", "Cherries", "Grapes"]

//route for root
app.get("/", (req, res) => {
    // res.send("Hello from Server"); //send a text message
    // res.sendStatus(500);
    // res.status(500).send("Hello from Server"); //send a status code with a message -> page displays message but if you open browser console, you can see the 500 error
    // res.status(500).json({message: "Error"}); //send json file
    res.status(200).sendFile(path.resolve(__dirname, "index.html")); //display an html webpage
    console.log("Client has connected");
})

app.get("/about", (req, res) => {
    res.send("About");
})

app.get("/api/fruits", (req, res) => {
    res.json(fruits); //returns an array in the form of a json
})

app.get("/api/fruits/:id", (req, res) => {
    //return the name of the fruit of the index user provided in the url (Ex. 0->Apple, 1->Orange, ...)
    let fid = req.params.id;
    res.send(fruits[fid]);
})

app.post("/api/fruits/", (req, res) => {
    //get a new fruit from the client and add it to my fruits array
    //Thunderclient New Request -> "POST" -> http://localhost:5000/api/fruits/ -> "BODY" -> "JSON" -> {"fruit": "Melon"}
    //req.body.fruit //this is "Melon" in the form of a json
    res.status(201).json({message: `${req.body.fruit} added to the fruits array`});
    fruits.push(req.body.fruit);
    console.log(fruits);
})

app.put("/api/fruits/:id", (req, res) => {
    //take an index from the user and replace the fruit at that index with another fruit
    //Thunderclient New Request -> "PUT" -> http://localhost:5000/api/fruits/1 -> "BODY" -> "JSON" -> {"fruit": "Lemon"}
    let fid = req.params.id;
    fruits[fid] = req.body.fruit;
    res.json({message: `Fruit at index ${fid} updated to ${req.body.fruit}`});
    console.log(fruits);
})

app.delete("/api/fruits/:id", (req, res) => {
    //remove the fruit from the id user entered
    //Thunderclient New Request -> "DELETE" -> http://localhost:5000/api/fruits/1
    let fid = req.params.id;
    res.json({message: `Fruit at index ${fid} is deleted`});
    fruits.splice(fid, 1);
    console.log(fruits);
})


//for any pages that I did not specify
app.all("*", (req, res) => {
    res.status(404).send("Page not found");
})

app.listen(5000, () => {
    console.log("Ready to listen to request at port 5000");
});

//node server.js
//    -> terminal: "Ready to listen to request at port 5000"
//go to browser localhost:5000
//    -> browser: "Hello from Server"
//    -> terminal: "Client has connected"
//^C to quit


//postman or thunderclient
//click New Request -> "GET" -> provide url you want to access (ex. http://localhost:5000/api/fruits/0)