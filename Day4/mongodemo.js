//step 1:
var mongodb = require('mongodb');

//step 2:
var mongoClient = mongodb.MongoClient;

//step 3 :
var mongourl = "mongodb://127.0.0.1:27017";

//step 4:
var mydb = "cnsdecob";

//step 5: establish connect
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
            else
                console.log(result);
        })
        //client.close();
    }
});