let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
const mongofun = require("../monogo_modules/monogoMeth");
const { expect } = require("chai");
// let should = require('chai').should();
//define assertion style
chai.should();
chai.expect;
let collectionName = 'comments';
chai.use(chaiHttp);

describe("Employee details api", () => {
  before(() => {
    console.log("Starting to Test......");
  });
  /* Test the get route */
  describe("GET /api/member", () => {
    it("It should get all the employees details", async () => {
      const res = await chai.request(server).get("/api/member");
      res.should.have.status(200);
      res.body.should.be.a("array");
    });
    it("It should not  get all the employees details", async () => {
      const res = await chai.request(server).get("/api/members");
      res.should.have.status(404);
    });
  });

  /* Test the get(by id) route */
  describe("GET BY NAME /api/member/:name", () => {
    it("It should get the details of employee by provided name", async () => {
      const name = "Abhishek";
      const res = await chai.request(server).get("/api/member/" + name);
      res.should.have.status(200);
      expect(res.body).to.have.property("name").eq(name);
    });
    it("It should not get the details by name", async () => {
      const name = "Johnson";
      const res = await chai.request(server).get("/api/members" + name);
      res.should.have.status(404);
    });
  });

  /* Test the post route */
  describe("POST  /api/member", () => {
    beforeEach(async()=>{
        let id = 1;
        const res=await mongofun.Delete(id);
    })
    it("It should post new employee details", async () => {
      const info = {
        _id: 1,
        username: "AbhiPanta",
        password: "abc@123",
        email: "abhi@gmail.com",
        name: "jack",
        address: "Bandipur",
        phone: "9814124502",
        pincode: "339601",
      };
      const res = await chai.request(server).post("/api/member").send(info);
      res.should.have.status(200);
    });
    it("It shouldnot post new employee details", async () => {
      const info = {
        _id: 5,
        username: "",
        password: "abc@123",
        email: "abhi@gmail.com",
        name: "Abhishek",
        address: "Bandipur",
        phone: "9814124502",
        pincode: "339601",
      };
      const res = await chai.request(server).post("/api/member").send(info);
      res.should.have.status(422);
    });
  });

  /* Test the put route */

  describe("PUT  /api/member", () => {
    it("It should modify employee details with given id", async () => {
      const info = {
        _id: 8,
        username: "Abhi",
        email: "abhi123@gmail.com",
        name: "Abhishek Panta",
      };
      const res = await chai.request(server).put("/api/member").send(info);
      res.should.have.status(200);
    });
    it("It should not  modify employee details", async () => {
      const info = {
        _id: 1,
        username: "",
        email: "abhi123@gmail.com",
        name: "",
      };
      const res = await chai.request(server).put("/api/members").send(info);
      res.should.have.status(404);
    });
  });

  /* Test the delete route */
  describe("DELETE BY ID /api/member/:_id", () => {
    it("It should delete the details of employee by provided id", async () => {
      const id = 9;
      const res = await chai.request(server).delete("/api/member/" + id);
      res.should.have.status(200);
    });
    it("It should not be able to delete the details by unknown id", async () => {
      const res = await chai.request(server).delete("/api/members");
      res.should.have.status(404);
    });
  });

  /* Testing for mongodb functions*/

  /*for Get */
  describe('It checks for Find function',()=>{
    it('It should return array of objects',async()=>{
      const res = await mongofun.Find();
      res.should.be.a("array");
    })
  });

  /*for Get with name*/
  describe('It checks for FindName function',()=>{
    it('It should return  object and should have given name',async()=>{
      let name = "Abhishek";
      const res = await mongofun.FindName(name);
      res.should.be.a("object");
      expect(res).to.have.property("name").eq(name);
    })
  });

  /*for POST*/
  describe('It checks for POST function',()=>{
    beforeEach(async()=>{
      let id = 2;
      const res=await mongofun.Delete(id);
     });
    it('It should check if upadation was sucessful or not.',async()=>{
      const info = {
        _id: 2,
        username: "AbhiPanta",
        password: "abc@123",
        email: "abhi@gmail.com",
        name: "Abhishek",
        address: "Bandipur",
        phone: "9814124502",
        pincode: "339601",
      };
      const res = await mongofun.Post(info);
      res.should.be.a("object");
      expect(res.insertedCount).to.eq(1);
    })
    it('It should return  object and should have name that was saved from above.',async()=>{
      let name = "Abhishek";
      const res = await mongofun.FindName(name);
      res.should.be.a("object");
      expect(res).to.have.property("name").eq(name);
    })
  });

  /*for Delete */
  describe('It checks for delete function',()=>{
    it('It should return  object with deltion successfull',async()=>{
      const id =1;
      const res = await mongofun.Delete(id);
      expect(res.deletedCount).to.eq(1);
    })
  });


});
