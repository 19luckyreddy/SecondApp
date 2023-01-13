var express = require('express');



var app = express();



//use get request with the request parameter

//http://localhost:3100/users

app.get('/users', (req, res) => {

    //declare users data

    var users = ['user1', 'user2', 'user3', 'user4', 'user5'];

    // res.send(users);

    // //or

    // res.json(users);

    if (req.query.findusers >= 0)
        res.json(users.slice(0, req.query.findusers));
    else
        res.send("Please pass only positive values");

});

//endpoint : http://localhost:3100/courses/frontend

app.get('/courses/:coursetype', (req, res) => {



    //courses data

    var courses = {

        'basic': 'HTML,CSS,JS',

        'frontend': 'Angular',

        'backend': 'Node,Express',

        'database': 'Mongodb'

    };



    //accept a input parameter

    var input = courses[req.params.coursetype];

    console.log(input); //output is shown in the terminal

    if (!input)

        res.status(404).json("Invalid course type ::" + req.params.coursetype + ". Pls try again ");

    else

        res.send(input); // output is shown in the browser

});


app.listen(3100, () => {

    console.log("Server is running at 3100");

})