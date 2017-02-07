"use strict";
let  express=require("express");
let router=require("./controllers");
let bodyParser=require("body-parser");
let app=express();
// 载入路由
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); // for parsing 
app.use(router);
app.set("view engine","ejs");
app.use(express.static(__dirname+'/src'));
app.use(express.static(__dirname+'/views'));
app.listen(3005);


