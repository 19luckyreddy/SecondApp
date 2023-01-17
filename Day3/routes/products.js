var express = require('express');
var router = express.Router();

//step 1:
var mongodb = require('mongodb');

//step 2:
var mongoClient = mongodb.MongoClient;

//step 3 :
var mongourl = "mongodb://127.0.0.1:27017";

//step 4:
var mydb = "cnsdecob";

// var products = [
//     { "pid": "P100", "pname": "Laptop", "price": 23000 },
//     { "pid": "P200", "pname": "Keyboard", "price": 300 },
//     { "pid": "P300", "pname": "Printer", "price": 15000 },
//     { "pid": "P400", "pname": "Mouse", "price": 2000 },
//     { "pid": "P500", "pname": "Headphones", "price": 12000 },
//     { "pid": "P600", "pname": "Scanner", "price": 20000 },
//     { "pid": "P700", "pname": "Bluetooth", "price": 6700 }
// ];

var products = [];

/* GET productts service  listing. */

router.get('/', function (req, res, next) {
    res.send('This is products service');
});

//Products endpoint : To fetch all products

//http://localhost:3000/products/allproducts

router.get('/allproducts', (req, res, next) => {

    //res.send(products);

    //or



    //after db integration

    mongoClient.connect(mongourl, (err, client) => {

        if (err)

            console.log("Error in connecting to the database");

        else {



            console.log("Connection to the database is successful");

            const cnsdb = client.db(mydb);

            //insert one document in the products collection

            const insertdoc = { "pid": "P800", "pname": "Projector", "price": 25000 };

            //perform insert operation

            //--------------------------

            // cnsdb.collection('products').insertOne(insertdoc,(err,result)=>{

            //     if(err)

            //         console.log("Error in insertion"+ err);

            //     else

            //         console.log("Document inserted"+ JSON.stringify(result));

            // });



            //find the documnets

            //-------------------



            cnsdb.collection('products').find({}).toArray((err, result) => {

                if (err)

                    console.log(err);

                else {

                    products = result;

                    console.log(result);

                }

            })

            //client.close();

        }

    });

    res.json(products);

});

router.get('/productbyid/:id', (req, res, next) => {
    var prodid = req.params.id;
    var result;
    products.forEach(element => {
        if (element.pid == prodid)
            result = element;
    });
    if (result != null)
        res.status(200).send(result);
    else
        res.status(404).send("Pls try again ");
});

router.get('/productbyname/:name', (req, res, next) => {
    var prodname = req.params.name;
    var result;
    products.forEach(element => {
        if (element.pname == prodname)
            result = element;
    });
    if (result != null)
        res.status(200).send(result);
    else
        res.status(404).send("Plz try again");
});

router.get('/lessthan/:price', (req, res, next) => {
    var prodprice = req.params.price;
    var result = [];
    products.forEach(element => {
        if (element.price <= prodprice)
            result.push(element);
    })
    if (result.length == 0)
        res.status(404).json("No Match");
    else
        res.status(200).json(result);
})

module.exports = router;