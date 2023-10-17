const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app'); // Assuming your Express app instance is exported from app.js
const Task = require('../models/taskModel'); // Import your Task model

const should = chai.should();
chai.use(chaiHttp);

describe('Tasks', () => {
  beforeEach((done) => {
    // Clear the database or set up a clean state before each test
    Task.deleteMany({}, (err) => {
      done();
    });
  });

  describe('GET /api/tasks', () => {
    it('should get all tasks', (done) => {
      chai.request(server)
        .get('/api/tasks')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0); // Assuming the database is empty initially
          done();
        });
    });
  });

  // Add more test cases for other endpoints (POST, PUT, DELETE) as needed
});
