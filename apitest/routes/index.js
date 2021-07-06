const express = require("express");
const router = express.Router();

const mdbMethod = require("../monogo_modules/monogoMeth");

const validationMiddleware = require("../middlewares/validation");
const ErrorHandler = require("../errors/errorHandler.js");

const collectionName = "comments";

router.get("/", async (req, res, next) => {
  try {
    const result = await mdbMethod.Find();
    if (result) {
      res.status(200).send(result);
    } else throw new Error();
  } catch (e) {
    next(ErrorHandler.badRequestError());
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    const result = await mdbMethod.FindName(req.params.name);
    if (result) {
      res.status(200).send(result);
    } else throw new Error();
  } catch (e) {
    next(ErrorHandler.badRequestError());
  }
});

router.post("/", validationMiddleware, async (req, res, next) => {
  try {
    const info = {
      _id: req.body._id,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      pincode: req.body.pincode,
    };
    const result = await mdbMethod.Post(info);
    if (result) {
      res.status(200).send(result);
    } else throw new Error();
  } catch (e) {
    next(ErrorHandler.badRequestError());
  }
});

router.put("/", async (req, res, next) => {
  try {
    const id = req.body._id;
    const info = req.body;
    const result = await mdbMethod.Put(id,info);
    if (result) {
      res.status(200).send(result);
    } else throw new Error();
  } catch (e) {
    next(ErrorHandler.badRequestError());
  }
});

//Write an API that deletes a user record based on userId or emailId
router.delete("/:_id", async (req, res,next) => {
  try {
    let id = parseInt(req.params._id);
    const result = await mdbMethod.Delete(id);
    if (result) {
      res.status(200).send(result);
    } else throw new Error();
  } catch (e) {
    next(ErrorHandler.badRequestError());
  }
});

//Write an API that does the Login Validation and returns 'true' or 'false'
router.post("/validate", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const result = await mdbMethod.Validate(username,password);
    if (result) {
      res.json({ message: "validation sucess!" });
    } else {
      res.json({ message: "validation failed!" });
    }
  } catch (e) {
    next(ErrorHandler.serverError());
  }
});
module.exports = router;
