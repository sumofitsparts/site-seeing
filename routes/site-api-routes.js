var db = require("../models");


module.exports = function(app) {


app.post("/api/sites", function(req, res) {
    console.log(req.body);
    db.Site.(req.body).then(function(dbSite) {
      res.redirect(307, "/");
    })
      res.json(err);
    });

app.delete("/api/posts/:id", function(req, res) {
  db.Site.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbSite) {
    res.json(dbSite);
  });
});

app.get("/api/posts/:id", function(req, res) {
  db.Site.findAll({
    where: {
      id: req.params.id
    },
    include: [db.User]
  }).then(function(dbSite) {
    res.json(dbSite);
  });
});

app.get("/api/posts/:category", function(req, res) {
  db.Site.findAll({
    where: {
      id: req.params.category
    }
  }).then(function(dbSite) {
    res.json(dbSite);
  });
});

app.get("/api/posts/:rating", function(req, res) {
  db.Site.findAll({
    where: {
      id: req.params.rating
    }
  }).then(function(dbSite) {
    res.json(dbSite);
  });
});

app.get("/api/sites", function(req, res) {
    db.Site.findAll({})
    .then(function(dbSite) {
        res.json(dbSite);
    });
});



};
