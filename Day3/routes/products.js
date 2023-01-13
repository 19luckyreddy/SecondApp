var express = require('express');

var router = express.Router();

var products = [

    { "pid": "P100", "pname": "Laptop", "price": 23000 },

    { "pid": "P200", "pname": "Keyboard", "price": 300 },

    { "pid": "P300", "pname": "Printer", "price": 15000 },

    { "pid": "P400", "pname": "Mouse", "price": 2000 },

    { "pid": "P500", "pname": "Headphones", "price": 12000 },

    { "pid": "P600", "pname": "Scanner", "price": 20000 },

    { "pid": "P700", "pname": "Bluetooth", "price": 6700 }

];

/* GET productts service  listing. */

router.get('/', function (req, res, next) {

    res.send('This is products service');

});


router.get('/allproducts', (req, res, next) => {
    res.json(products);
})

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