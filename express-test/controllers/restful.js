'use strict';
const router = require('express').Router();
let users = [{
	"id": 1,
	"name": "dl"
}, {
	"id": 2,
	"name": "dl2"
}, {
	"id": 3,
	"name": "dl3"
}, {
	"id": 4,
	"name": "dl4"
}];

module.exports = function(router) {
	//获取用户
	router.get('/users/:id', function(req, res) {
		let id = req.params.id;
		let getUser = users.filter(function(user) {
			return user.id == id;
		});
		res.send(getUser.length ? getUser[0] : '没有数据');
	});
	//增加用户 curl -X POST --data "name=dl5" http://localhost:3005/addUsers
	router.post('/addUsers', function(req, res) {
		let addUser = req.body;
		console.log(addUser);
		if (addUser) {
			addUser.id = users[users.length - 1].id + 1;
			users.push(addUser);
			res.send(addUser);
		} else {
			res.send('没有数据');
		}
	});

};