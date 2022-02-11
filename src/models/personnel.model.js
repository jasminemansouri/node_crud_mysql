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

Personnel.update = function (id, personnel, result) {
  dbConn.query(
    "UPDATE personnel SET matricule=?,nom=?,prenom=?,grade=? WHERE id = ?",
    [
      personnel.matricule,
      personnel.nom,
      personnel.prenom,
      personnel.grade,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Personnel.delete = function (id, result) {
  dbConn.query("DELETE FROM personnel WHERE id = ?", [id], function (err, res) {
    console.log(`DELETE FROM personnel WHERE id =${id}`)
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};



module.exports = Personnel;


