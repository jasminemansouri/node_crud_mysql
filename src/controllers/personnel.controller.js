'use strict';

const Personnel = require('../models/personnel.model');


exports.findAll = function (req, res) {
  Personnel.findAll(function (err, personnel) {
    // console.log('controller')
    if (err)
      res.send(err);
    console.log('res', personnel);
    res.send(personnel);
    // res.send({  "draw": 1,
    // "recordsTotal": 4,
    // "recordsFiltered": 4,
    // "data": employee });
  });
};

exports.create = function (req, res) {
  const new_personnel = new Personnel(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ success: false, message: 'Please provide all required field' });
  } else {
    Personnel.create(new_personnel, function (err, personnel) {
      if (err)
        res.send(err);
      res.json({ success: true, message: "Personnel added successfully!", data: personnel });
    });
  }
};

exports.findById = function (req, res) {
  Personnel.findById(req.params.id, function (err, personnel) {
    if (err)
      res.send(err);
    res.json(personnel[0]);
  });
};

exports.update = function(req, res) {
    
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ success:false, message: 'Please provide all required field' });
  }else{
      Personnel.update(req.params.id, new Personnel(req.body), function(err, personnel) {
          if (err)
          res.send(err);
          res.json({ success:true, message: 'Personnel successfully updated' });
      });
  }

};

exports.delete = function(req, res) {
  Personnel.delete( req.params.id, function(err, personnel) {
    if (err)
    res.send(err);
    res.json({ success:true, message: 'Personnel successfully deleted' });
  });
};