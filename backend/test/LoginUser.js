import expect from 'chai';
import request from 'request';
const URL = 'http://127.0.0.1:8090/user';

//Using chai testing framework for testing the API(LoginUser.js)

describe('User API', () => {
    describe('Login User', () => {
      describe('Login user validation ERROR', () => {
        describe('User keep email empty', () => {
          const payload = {
           email_address:"",
           password:"pasi12344"
          }
    
          it('Status', done => {
            request.post(`${URL}/login`, {
              json: payload
            }, (_, response) => {
                
              expect.expect(response.statusCode).to.equal(400)
              done()
            })
          })
    
          it('Message', done => {
            request.post(`${URL}/login/`, {
              json: payload
            }, (_, response) => {
                
              expect.expect(response.body.message).to.equal('"Email Address" is not allowed to be empty')
              done()
            })
          })
        })
  
        describe('User keep email empty', () => {
          const payload = {
  
           email_address:"admin@gmail.com",
           password:""
            
          }
    
          it('Status', done => {
            request.post(`${URL}/login/`, {
              json: payload
            }, (_, response) => {
              expect.expect(response.statusCode).to.equal(400)
              done()
            })
          })
    
          it('Message', done => {
            request.post(`${URL}/login/`, {
              json: payload
            }, (_, response) => {
              expect.expect(response.body.message).to.equal('"Password" is not allowed to be empty')
              done()
            })
          })
        })
        // describe('User Loged in Successfully', () => {
        //   const payload = {
  
        //    email:"admin@gmail.com",
        //    password:"Admin1234"
            
        //   }
    
        //   it('Status', done => {
        //     request.post(`${URL}/login`, {
        //       json: payload
        //     }, (_, response) => {
        //       expect(response.statusCode).to.equal(200)
        //       done()
        //     })
        //   })
    
        
        // })
      })
    })
  })