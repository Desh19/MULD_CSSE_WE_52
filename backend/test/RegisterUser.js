import expect from 'chai';
import request from 'request';
const URL = 'http://127.0.0.1:8090/user';

//Using chai testing framework for testing the API(RegisterUser.js)

describe('User API', () => {
    describe('Register User', () => {
      describe('Register user validation ERROR', () => {
        describe('User keep name empty', () => {
          const payload = {
            name:"",
            mobile:"0774433556",
            type:"user",
            email_address:"test@gmail.com",
            nic:"199977666555",
            password:"123456778",
          }
    
          it('Status', done => {
            request.post(`${URL}/`, {
              json: payload
            }, (_, response) => {
                
              expect.expect(response.statusCode).to.equal(400)
              done()
            })
          })
    
          it('Message', done => {
            request.post(`${URL}/`, {
              json: payload
            }, (_, response) => {
                
              expect.expect(response.body.message).to.equal('"Name" is not allowed to be empty')
              done()
            })
          })
        })
  
        describe('User keep mobile empty', () => {
            const payload = {
                name:"test",
                mobile:"",
                type:"user",
                email_address:"test@gmail.com",
                nic:"199977666555",
                password:"123456778",
              }
    
          it('Status', done => {
            request.post(`${URL}/`, {
              json: payload
            }, (_, response) => {
              expect.expect(response.statusCode).to.equal(400)
              done()
            })
          })
    
          it('Message', done => {
            request.post(`${URL}/`, {
              json: payload
            }, (_, response) => {
              expect.expect(response.body.message).to.equal('"Mobile Number" must be a number')
              done()
            })
          })
        })

        describe('User keep email empty', () => {
            const payload = {
                name:"test",
                mobile:"0774638333",
                type:"user",
                email_address:"",
                nic:"199977666555",
                password:"123456778",
              }
    
          it('Status', done => {
            request.post(`${URL}/`, {
              json: payload
            }, (_, response) => {
              expect.expect(response.statusCode).to.equal(400)
              done()
            })
          })
    
          it('Message', done => {
            request.post(`${URL}/`, {
              json: payload
            }, (_, response) => {
              expect.expect(response.body.message).to.equal('"Email Address" is not allowed to be empty')
              done()
            })
          })
        })

        describe('User keep nic empty', () => {
            const payload = {
                name:"test",
                mobile:"0774638333",
                type:"user",
                email_address:"test@gmail.com",
                nic:"",
                password:"123456778",
              }
    
          it('Status', done => {
            request.post(`${URL}/`, {
              json: payload
            }, (_, response) => {
              expect.expect(response.statusCode).to.equal(400)
              done()
            })
          })
    
          it('Message', done => {
            request.post(`${URL}/`, {
              json: payload
            }, (_, response) => {
              expect.expect(response.body.message).to.equal('"NIC" is not allowed to be empty')
              done()
            })
          })
        })

        describe('User keep nic empty', () => {
            const payload = {
                name:"test",
                mobile:"0774638333",
                type:"user",
                email_address:"test@gmail.com",
                nic:"10022333222",
                password:"",
              }
    
          it('Status', done => {
            request.post(`${URL}/`, {
              json: payload
            }, (_, response) => {
              expect.expect(response.statusCode).to.equal(400)
              done()
            })
          })
    
          it('Message', done => {
            request.post(`${URL}/`, {
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