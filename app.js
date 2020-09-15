const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let foodItems = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// Easier module to work with among others
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  let day = date.getDate();
  // We need the views folder and the .ejs file in order for this to work
  res.render('list', { itemTitle: day,newItems: foodItems });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;

  if (item != "") {
    if (req.body.list === "Work") {
      workItems.push(item);
      res.redirect("/work");
    } else {
      foodItems.push(item);
      // Redirects to the home route
      res.redirect("/");
    }
  }


})

app.get("/work", function(req, res) {
  // We need the views folder and the .ejs file in order for this to work
  res.render('list', {
    itemTitle: "Work List",
    newItems: workItems
  });
});

app.get("/about", function(req, res) {
  // We need the views folder and the .ejs file in order for this to work
  res.render('about');
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
