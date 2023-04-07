var express = require('express');
var router = express.Router();
var Accountant = require('../models/accountant');

/* GET ALL STUDENT */
router.get('/', function (req, res, next) {
    Accountant.find(function (err, accountant) {
        if (err) return next(err);
        res.json(accountant);
    }).sort({id: -1});
});

/* GET Limit skip */
router.get('/:skip/:limit', function (req, res, next) {
    Accountant.find(function (err, accountant) {
        if (err) return next(err);
        res.json(accountant);
    }).sort({id: -1}).skip(parseInt(req.params.skip)).limit(parseInt(req.params.limit));
});

/* GET SINGLE STUDENT BY ID */
router.get('/:id', function (req, res, next) {
    Accountant.findOne({ id: req.params.id }, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE STUDENT */
router.post('/', function (req, res, next) {
    let accountant = new Accountant(req.body)
    accountant.save(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

/* UPDATE STUDENT */
router.put('/:id', function (req, res, next) {
    Accountant.findOneAndUpdate({ id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
        if (err) return next(err);
        res.json(doc);
    });
});

/* DELETE STUDENT */
router.delete('/:id', function (req, res, next) {
    Accountant.findOneAndRemove({ id: req.params.id }, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;