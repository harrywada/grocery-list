var express = require("express");
var router = express.Router();
var ItemModel = require("../models/ItemModel.js");

router.get("/", function(req, res, next){
  ItemModel.find(function(err, items){
    res.render("index", {
      title: "Express",
      items: items
    });
  });
});

router.post("/items", function(req, res, next){
  var item = new ItemModel({
    name: req.body.item,
    quantity: req.body.quantity
  });

  item.save(function(err, item){
    res.redirect("/");
  });
});

module.exports = router;
