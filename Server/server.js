const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//body-parser is used to parse the incoming request bodies in a middleware before your handlers, available under the req.body property
//CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
//CORS identifies itself as a middleware function that can be used in Express applications

const PORT= 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, function(){
    console.log('Server is running on localhost:' + PORT);
});
//get request
app.get('/', function(req, res){
    res.send('Hello from server');
});
//post form
app.post('/enroll' , function(req, res , next){
    console.log(req.body);
try{
    res.status(200).send({"message":"Data received"});  
}
catch(err){
    res.status(400).send({"message":"Data not received" , "error":err});  

}});