const assert = require('assert'),
      url = 'http://localhost:3000',
      chai = require('chai'),
      chaiHttp = require('chai-http'),
      should = chai.should();

const fakeObjId = '5d00cf000d000b0e0000dbdf';
let id = '';

//require('../app.js');
chai.use(chaiHttp);

describe('Server test', () => {
  before(() => { console.log('before test'); });
  after(() => { console.log('after test'); });

  
  describe('Test Route 1 - get product list', () => {
    it('Test Case 1 - should have status of 200', (done) => {
      chai.request(url)
          .get('/list')
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
    });
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

  describe('/list', () => {
    it('it should GET all the products', (done) =>{
      chai.request(url)
          .get('/list')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');

            done();
          });
    });
  });

  describe('/add', () => {
    it('it should insert a doc', (done) => {
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