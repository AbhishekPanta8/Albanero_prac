let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
// let should = require('chai').should();
//define assertion style
chai.should();

chai.use(chaiHttp);

describe('Employee details api',()=>{
    before(()=>{
        console.log("Starting to Test......")
    })
    /* Test the get route */
    describe('GET /api/member',()=>{
        it('It should get all the employees details',async()=>{
           const res= await chai.request(server)
                                .get("/api/member");
            res.should.have.status(200);
            res.body.should.be.a('array');
        });
        it('It should not  get all the employees details',async()=>{
            const res= await chai.request(server)
                 .get("/api/members");
             res.should.have.status(404);
         });
    });

     /* Test the get(by id) route */
     describe("GET BY NAME /api/member/:name",()=>{
        it('It should get the details of employee by provided name',async()=>{
            const name = 'Abhishek';
            const res= await chai.request(server)
                                .get("/api/member/"+name);
            res.should.have.status(200);
        });
        it('It should not get the details by name',async()=>{
            const name = 'Johnson';
            const res= await chai.request(server)
                                .get("/api/members"+name);
            res.should.have.status(404);
        });
    });

    /* Test the post route */

    describe("POST  /api/member",()=>{
        it('It should post new employee details',async()=>{
            const info={
                "_id": 1,
                "username": "AbhiPanta",
                "password": "abc@123",
                "email": "abhi@gmail.com",
                "name": "Abhishek",
                "address": "Bandipur",
                "phone": "9814124502",
                "pincode": "339601"
            }
            const res = await chai.request(server)
                                .post("/api/member")
                                .send(info);
            res.should.have.status(200);
        });
        it('It shouldnot post new employee details',async()=>{
            const info={
                "_id": 5,
                "username": "",
                "password": "abc@123",
                "email": "abhi@gmail.com",
                "name": "Abhishek",
                "address": "Bandipur",
                "phone": "9814124502",
                "pincode": "339601"
            }
            const res = await chai.request(server)
                                .post("/api/member")
                                .send(info);
            res.should.have.status(422);
        });
    });

    /* Test the put route */

    describe("PUT  /api/member",()=>{
        it('It should modify employee details with given id',async()=>{
            const info={
                "_id": 8,
                "username": "Abhi",
                "email": "abhi123@gmail.com",
                "name": "Abhishek Panta",
            }
            const res = await chai.request(server)
                                .put("/api/member")
                                .send(info);
            res.should.have.status(200);
        });
        it('It should not  modify employee details',async()=>{
            const info={
                "_id": 1,
                "username": "",
                "email": "abhi123@gmail.com",
                "name": "",
            }
            const res = await chai.request(server)
                                .put("/api/members")
                                .send(info);
            res.should.have.status(404);
        });
    });

    /* Test the delete route */
    describe('DELETE BY ID /api/member/:_id',()=>{
        it('It should delete the details of employee by provided id',async()=>{
            const id = 9;
           const res= await chai.request(server)
                                .delete("/api/member/"+id);
            res.should.have.status(200);;
        });
        it('It should not be able to delete the details by unknown id',async()=>{
            const res= await chai.request(server)
                 .delete("/api/members");
             res.should.have.status(404);
         });
    });

})
