const express =  require("express")
const app =  express()
const swagger = require("swagger-jsdoc")
const swaggerUi = require('swagger-ui-express');
const cors = require("cors")
const  bodyParser =  require("body-parser")
const compression =require('compression');
const http  =  require("http")
const path = require("path")
require('dotenv').config()
const mongoose  =  require("mongoose")
mongoose.Promise =  require("bluebird")


app.use(cors())
app.use(compression())
app.use(bodyParser.json({strict:false}));
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect(process.env.mongodburl,{useNewUrlParser: true} ,(err)=>{
    if(err){
        console.error("mongodb connection err")
        console.error(err)
    }
},{ username: process.env.username,pass:process.env.pass ,useMongoClient: true } )




/**
 * internal modules
 */
const dishRouter =  require("./router/dishRouter")
const leaderRouter =  require("./router/leaderRouter")
const promotionRouter =  require("./router/promoRouter")

const  swaggerDefinition = {
    info: { 
      title: 'StoreKing Test', 
      version: '1.0.0', 
      description: 'A sample API', 
    },
    host: 'localhost:3002', 
    basePath: '/', 
};
  
  // Options for the swagger docs
const optswager = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./router/*.js'],
};

const swaggerSpec = swagger(optswager);

app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger, {
    //explorer : true, //open if you want to open the explorer
    swaggerUrl:"http://localhost:3002/swagger.json"
}));

app.use("/dishes",dishRouter)
app.use("/leadership",leaderRouter)
app.use("/promotions",promotionRouter)


http.createServer(app).listen(3002,()=>{
    console.log("run in port 3002")
})