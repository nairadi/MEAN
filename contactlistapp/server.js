var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db =mongojs('contactlist', ['contactlist']);
//static => html, js, css and image files because they don't change dynamically
//dirname + "/public" tells where to look for these files

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
	console.log("I received a GET request");

    db.contactlist.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });

	// person1 = {
 //    	name: 'Tim',
 //    	email: 'tim@email.com',
 //    	number: '(111) 111-1111'
 //    };
 //    person2 = {
 //    	name: 'Emily',
 //    	email: 'emily@email.com',
 //    	number: '(222) 222-2222'
 //    };
 //    person3 = {
 //    	name: 'John',
 //    	email: 'john@email.com',
 //    	number: '(333) 333-3333'
 //    };

 //    var contactlist = [person1, person2, person3];
 //    res.json(contactlist);
});

app.post('/contactlist', function( req, res){
    console.log(req.body);
});

app.listen(3000);
console.log("Server running on port 3000");