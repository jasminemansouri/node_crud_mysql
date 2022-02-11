'use strict';

const Grade = require('../models/grade.model');


exports.findAll = function (req, res) {
    Grade.findAll(function (err, grade) {
    if (err)
      res.send(err);
    console.log('res', grade);
    res.send(grade);
   
  });
};