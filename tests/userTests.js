const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app'); // Assuming your Express app instance is exported from app.js
const User = require('../models/userModel'); // Import your User model

const should = chai.should();
chai.use(chaiHttp);

describe('Users', () => {
  beforeEach((done) => {
    // Clear the database or set up a clean state before each test
    User.deleteMany({}, (err) => {
      done();
    });
  });

  describe('POST /api/users/register', () => {
    it('should register a new user', (done) => {
      const newUser = {
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      };

      chai.request(server)
        .post('/api/users/register')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('username');
          res.body.should.have.property('email');
          res.body.should.have.property('password');
          done();
        });
    });
  });

  // Add more test cases for other user-related endpoints (login, update, delete) as needed
});
