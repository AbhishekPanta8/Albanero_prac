const express = require("express");
const router = express.Router();

const mdbMethod = require('../mongo_con.js');

const validationMiddleware = require('../middlewares/validation');
const ErrorHandler = require("../errors/errorHandler.js");

const collectionName = "comments";

router.get("/", async(req, res,next) => {
    try{
        const db = await mdbMethod.Find();
        var myPromise = () => {
            return new Promise((resolve, reject) => {
            db.collection(collectionName)
            .find({})
            .toArray(function(err, data) {
                err ? reject(err) 
                    : resolve(data);
                });
            }); 
        };
        var result = await myPromise();
        res.json(result);
    }
    catch(e){
        next(ErrorHandler.badRequestError());
    }
});

router.get("/:name", async(req, res,next) => {
    try{
        const db = await mdbMethod.Find();
        let names = (req.params.name);
        var myPromise = () => {
            return new Promise((resolve, reject) => {
            db.collection(collectionName)
            .find({name:names})
            .toArray(function(err, data) {
                err ? reject(err) 
                    : resolve(data);
                });
            }); 
        };
        var result = await myPromise();
        res.json(result);
    }
    catch(e){
        next(ErrorHandler.badRequestError());
    }
});

router.post("/",
   validationMiddleware,
    async(req, res,next) => {
        try{
            const info = {
                _id: req.body._id,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                name: req.body.name,
                address: req.body.address,
                phone: req.body.phone,
                pincode: req.body.pincode
            };
            const db = await mdbMethod.Find();
            var myPromise = () => {
                return new Promise((resolve, reject) => {
                db.collection(collectionName)
                .insertOne(info,function(err, data) {
                    err ? reject(err) 
                        : resolve(data);
                    });
            })};
            var result = await myPromise();
            res.json(result);
        }
        catch(e){
            next(ErrorHandler.badRequestError());
        }
    }
);



router.put("/",async(req, res,next) => {
    try{
        const id = req.body._id;
        const db = await mdbMethod.Find();
        const info = req.body;
        var myPromise = () => {
            return new Promise((resolve, reject) => {
            db.collection(collectionName)
            .updateOne(
                {_id: parseInt(id) },
                { $set: info },function(err, data) {
                err ? reject(err) 
                    : resolve(data);
                });
        })};
        var result = await myPromise();
        res.json(result);
    }
    catch(e){
        next(ErrorHandler.badRequestError());
    }
});

//Write an API that deletes a user record based on userId or emailId
router.delete("/:_id", async(req, res) => {
    try{
        const db = await mdbMethod.Find();
        let id = parseInt(req.params._id);
        var myPromise = () => {
            return new Promise((resolve, reject) => {
            db.collection(collectionName)
            .deleteOne({ _id: parseInt(id)},function(err, data) {
                err ? reject(err) 
                    : resolve(data);
                });
        })};
        var result = await myPromise();
        res.json(result);
    }
    catch(e){
        next(ErrorHandler.badRequestError());
    }
});

//Write an API that does the Login Validation and returns 'true' or 'false'
router.post("/validate",async(req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
        const db = await mdbMethod.Find();
        var myPromise = () => {
            return new Promise((resolve, reject) => {
            db.collection(collectionName)
            .findOne({"username":username,"password":password},function(err, data) {
                err ? reject(err) 
                    : resolve(data);
                });
        })};
        var result = await myPromise();
        if(result){
            res.json({message : "validation sucess!"});
        }
        else{
            res.json({message : "validation failed!"});
        }
    }
    catch(e){
        next(ErrorHandler.serverError());
    }
})
module.exports = router;