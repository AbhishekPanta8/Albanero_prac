const ErrorHandler = require("../errors/errorHandler.js");
const collectionName = "comments";
const mdbMethod = require("../mongo_con.js");
let usernameValid = (username) => {
  if (username == "") {
    return false;
  } else {
    return true;
  }
};
// async function userunique(username) {
//   const db = await mdbMethod.Find();
//   const searchCursor = await db
//     .collection(collectionName)
//     .findOne({ username: username });
//   return searchCursor === null ? true : false;
  //  if(searchCursor===null)
  //  {
  //      return true;
  //  }
  //  else{
  //   return false;
  //  }
// }
let passwordValid = (password) => {
  if (password.length < 1) {
    return false;
  } else {
    return true;
  }
};

// async function emailUnique(email) {
//   const db = await mongofun();
//   const searchCursor = await db
//     .collection(collectionName)
//     .findOne({ email: email });
//   if (searchCursor === null) {
//     return true;
//   } else {
//     return false;
//   }
// }
let emailValid = (email) => {
  let at = email.indexOf("@");
  let dot = email.indexOf(".");
  if (email.length < 5 || at < 1 || dot <= at + 2 || dot === email.length - 1) {
    return false;
  }
  return true;
};
let nameValid = (name) => {
  if (name.length > 40) {
    return false;
  }
  return true;
};
let addressValid = (address) => {
  if (address.length > 150) {
    return false;
  }
  return true;
};
let phoneValid = (phn) => {
  let intphn = parseInt(phn);
  if (phn === "" || typeof intphn !== "number" || phn.length > 10) {
    return false;
  }
  return true;
};
let pincodeValid = (pincode) => {
  let intpin = parseInt(pincode);
  if (pincode === "" || typeof intpin !== "number" || pincode.length !== 6) {
    return false;
  }
  return true;
};
function validation(req, res, next) {
  if (usernameValid(req.body.username) === false) {
    next(ErrorHandler.ValidationError("Username is not Valid"));
  }
  // else if(userunique(req.body.username).then(val=>val)){
  //  next(ErrorHandler.ValidationError("username isnot unique"));
  // }
  else if (passwordValid(req.body.password) === false) {
    next(ErrorHandler.ValidationError("password is not Valid"));
  } else if (emailValid(req.body.email) === false) {
    next(ErrorHandler.ValidationError("emailID is not Valid"));
  }
  // else if(emailUnique(req.body.email).then(val=>val)){
  //  next(ErrorHandler.ValidationError("emailID is not unique"));
  // }
  else if (nameValid(req.body.name) === false) {
    next(ErrorHandler.ValidationError("name is not Valid"));
  } else if (addressValid(req.body.address) === false) {
    next(ErrorHandler.ValidationError("address isnot Valid"));
  } else if (phoneValid(req.body.phone) === false) {
    next(ErrorHandler.ValidationError("phone no. is not Valid"));
  } else if (pincodeValid(req.body.pincode) === false) {
    next(ErrorHandler.ValidationError("pincode isnot Valid"));
  } else {
    next();
  }
}

module.exports = validation;
