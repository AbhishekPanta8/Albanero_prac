const express = require("express");
const app = express();
const router = express.Router();

const mdbMethod = require('../../mongo_con.js');

const dbName = "EmployeeDetails";
const collectionName = "comments";

router.get("/", async(req, res) => {
    const db = await mdbMethod.Find();
    db.collection(collectionName)
        .find({})
        .toArray((err, doc) => {
            if (err) {
                return res.status(400).send(err.message);
            }
            res.status(200).json(doc);
        });
});
router.get("/:name", async(req, res) => {
    const db = await mdbMethod.Find();
    let names = (req.params.name);
    db.collection(collectionName).findOne({ name: names }, (err, doc) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        if (doc === null) {
            return res.status(400).json({ msg: `No member with id ${id} found.` });
        }
        res.status(200).json(doc);
    });
});

async function usernameValid(username){
    const db = await mdbMethod.Find();
    const searchCursor = await db.collection(collectionName).findOne({"username":username});
    if(username.length<1 ||  searchCursor)
    {
        return false;
    }else{
        return true;
    }
} 
let passwordValid = (password)=>{
    if(password.length<1){
        return false;
    }
    else
    {
        return true;
    }
}
let emailValid = async(email)=>{
    const db = await mdbMethod.Find();
    const searchCursor = await db.collection(collectionName).findOne({"email":email});
    let at=email.indexOf('@');
    let dot=email.indexOf('.');
    if(searchCursor || email.length<5||at<1||dot<=at+2||dot===email.length-1)
    {
        return false;
    }
    return true;
}
let nameValid =(name)=>{
    if(name.length>40){
        return false;
    }
    return true;
}
let addressValid =(address)=>{
    if(address.length>150){
        return false;
    }
    return true;
}
let phoneValid =(phn)=>{
    let intphn = parseInt(phn);
    if(phn==="" || (typeof intphn !== 'number') || phn.length>10){
        return false;
    }
    return true;
}
let pincodeValid=(pincode)=>{
    let intpin = parseInt(pincode);
    if(pincode==="" || (typeof intpin !== 'number') || pincode.length!==6){
        return false;
    }
    return true;
}
router.post("/",
    (req,res,next)=>{
        if(usernameValid(req.body.username)===false)
        {
            res.status(400).json({msg:"Username is not Valid"});
        }else if(passwordValid(req.body.password)===false){
            res.status(400).json({msg:"password is not Valid"});
        }else if(emailValid(req.body.email)===false){
            res.status(400).json({msg:"emailID is not Valid"});
        }else if(nameValid(req.body.name)===false){
            res.status(400).json({msg:"name is not Valid"});
        }else if(addressValid(req.body.address)===false){
            res.status(400).json({msg:"address isnot Valid"});
        }else if(phoneValid(req.body.phone)===false){
            res.status(400).json({msg:"phone no. is not Valid"});
        }else if(pincodeValid(req.body.pincode)===false){
            res.status(400).json({msg:"pincode isnot Valid"});
        }else{
            next();
        }   
    },
    async(req, res) => {
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
        db.collection(collectionName).insertOne(info, (err, doc) => {
            if (err) {
                return res.status(400).send(err.message);
            }
            res.status(200).json({ msg: "Successfully Inserted", doc });
        });
    }
);



router.put("/", async(req, res) => {
    const db = await mdbMethod.Find();
    const id = req.body._id;
    // const id = req.params._id;
    const info = req.body;
    db.collection(collectionName).updateOne(
        { _id: parseInt(id) },
        { $set: info },
        (err, doc) => {
            if (err) {
                console.log(err.message);
            }
            res.status(200).json({ msg: "Updated successfully", doc });
        }
    );
});


//Write an API that deletes a user record based on userId or emailId
router.delete("/:_id", async(req, res) => {
    const db = await mdbMethod.Find();
    let id = parseInt(req.params._id);
    db.collection(collectionName).deleteOne({ _id: parseInt(id) }, (err, doc) => {
        if (err) {
            res.status(400).send(err.message);
        }
        res.status(200).json({ msg: "Deleted successfully", doc });
    });
});

//Write an API that does the Login Validation and returns 'true' or 'false'
// router.post("/",async(req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;
//     const db = await mdbMethod.Find();
//     db.collection(collectionName).findOne({"username":username,"password":password},(err, doc) => {
//         if (err) {
//             return  res.status(400).json({ msg: `false ${username} not valid`, doc });
//         }
//         if(doc){
//             return res.status(200).json({ msg: "true", doc });
//         }
//         else{
//             return res.status(200).json({ msg: "false", doc });
//         }
        
//     });
// })
module.exports = router;

