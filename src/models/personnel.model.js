"user strict";
var dbConn = require("./../../config/db.config");

//Employee object create
var Personnel = function (personnel) {

  this.matricule = personnel.matricule;
  this.nom = personnel.nom;
  this.prenom = personnel.prenom;
  this.grade = personnel.grade;

};

Personnel.findAll = function (result) {
  dbConn.query("select * from personnel", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("personnel : ", res);
      result(null, res);
    }
  });
};

Personnel.create = function (newPers, result) {
  dbConn.query("INSERT INTO personnel set ?", newPers, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Personnel.findById = function (id, result) {
  dbConn.query(
    "Select * from personnel where id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};


module.exports = Personnel;


