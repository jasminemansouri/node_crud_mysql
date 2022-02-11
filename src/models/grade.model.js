"user strict";
var dbConn = require("./../../config/db.config");

//Employee object create
var Grade = function (grade) {

  this.id_grade = grade.id_grade;
  this.lib_grade = grade.lib_grade;

};

Grade.findAll = function (result) {
  dbConn.query("select * from grade", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("grade : ", res);
      result(null, res);
    }
  });
};

module.exports = Grade;
