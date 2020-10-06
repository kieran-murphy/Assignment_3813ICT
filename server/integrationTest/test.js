const assert = require('assert'),
      url = 'http://localhost:3000',
      chai = require('chai'),
      chaiHttp = require('chai-http'),
      should = chai.should();

const fakeObjId = '5d00cf000d000b0e0000dbdf';
let id = '';

//require('../app.js');
chai.use(chaiHttp);

//declares the before and after conditions for the test
describe('Server test', () => {
  before(() => { console.log('before test'); });
  after(() => { console.log('after test'); });

  //test for /list which checks if it has a status of 200
  describe('Test Route 1 - get product list', () => {
    it('Test Case 1 - should have status of 200', (done) => {
      chai.request(url)
          .get('/list')
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
    });
    //test for /list which checks if it is an array
    it('Test Case 2 - should exist and be an array', (done) => {
      chai.request(url)
          .get('/list')
          .end((err, res) => {
            should.exist(res.body);
            res.body.should.be.a('array');
            //id = res.body[0]._id;
            done();
          });
    });
  });

//test for /add route which adds data
  describe('Test route 2 - adding items ', () => {
    it('Test Case 1 - it should insert a doc', (done) => {
      chai.request(url).post('/add').type('form')
          .send({ 'name': 'Kieran', 'id': 7271 })
              .end((err, res) => {
                res.should.have.status(200);
                //res.body.should.have.property('name');
                //res.body.should.have.property('id');
                console.log(res.body);
                done();
              });
    });
  });

});