'use strict';

const Personnel = require('../models/personnel.model');


exports.findAll = function(req, res) {
    Personnel.findAll(function(err, personnel) {
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

exports.create = function(req, res) {
    const new_personnel = new Personnel(req.body);
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ success:false, message: 'Please provide all required field' });
    }else{
        Personnel.create(new_personnel, function(err, personnel) {
            if (err)
            res.send(err);
            res.json({success:true,message:"Personnel added successfully!",data:personnel});
        });
    }
};
  