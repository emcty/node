'use strict';
const router = require('express').Router();
module.exports=function(router){ 
	router.get("/formAction",function(req,res){ 
		let id = req.query;
		res.send(id);
	});
};