//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, res) {

const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});





// const express = require("express");

// const bodyParser = require("body-parser");

// const app = express();
// let items=["Buy Food","Cook Food","Eat Food"];
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
// app.get("/", function(req, res) {

// let today = new Date();
// let options = {
// weekday: "long",
// day: "numeric", 
// month: "long"
// };

// let day =today.toLocaleDateString("en-US", options);
// // var today = new Date();
// // var currentDay = today.getDay();

// // var day = "";

// // if (currentDay === 6 || currentDay === 0) {

// // day = "Weekend"; 
// // } 
// // else {

// // day = "Weekday";
// // }

// res.render("list", {kindOfDay: day, newListItems: items});//newItem name must match with the nae of input

// });

// app.post("/", function(req, res) { 
//     let item = req.body.newItem;
 
// items.push(item);
// res.redirect("/");
// });

// app.listen(3000, function(){ 
//     console.log("Server started on port 3000");
// });