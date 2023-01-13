//import the express module

var express = require('express');

//call the express function  - and store it in the application isntance

var app = express();



//app is now responsible to handle the http requests (get,put,post,delete)



//Default API endpoint :  http://localhost:3300/

app.get('/', (req, res) => {

  res.write("HEllo");

  res.write("How are you?");

  res.write("Good Afternoon!!");

  res.write("This message is from Express JS ");

  //end the response

  res.end();

});



//Users endpoint : http://localhost:3300/users

app.get('/users', (req, res) => {

  res.send("This is user api endpoint ");

});



//courses endpoint : http://localhost:3300/courses

app.get('/courses', (req, res) => {

  var courses = ['flutter', 'nodejs', 'expressjs', 'mongodb'];

  res.send(courses);

});



//books endpoint : http://localhost:3300/books

app.get('/books', (req, res) => {

  var books = [

    { 'bookid': 1, 'bookname': 'Harry Potter', 'bookauthor': 'J K Rowling' },

    { "bookid": 2, "bookname": 'Two States', 'bookauthor': 'Chetan Bhagat' },

    { "bookid": 3, "bookname": 'Hound of Baskerville', 'bookauthor': 'William Shakespeare' }

  ];



  res.send(books);

});



//Create the server  - use listen() used in express

app.listen(3300, '127.0.0.1', () => {

  console.log("Server is running at port no 3300");

});



//To run the applicatoin in the browser / postman api :

// URL : http://localhost:3300/