import request from 'supertest';
import { app } from '../../app.js';

test ('it returns 201  on successful signup' , async()=>{
    return request(app)
    .post('/api/events/users/signup/')
    .send({
        email: 'test90@test.com',
        password: 'password123'
    })
    .expect(201)

})


it('returns a 400 with an invalid email', async () => {
    return request(app)
      .post('/api/events/users/signup/')
      .send({
        email: 'alskdflaskjfd',
        password: 'password'
      })
      .expect(400);
  });
  
  it('returns a 400 with an invalid password', async () => {
    return request(app)
      .post('/api/events/users/signup/')
      .send({
        email: 'alskdflaskjfd',
        password: 'p'
      })
      .expect(400);
  });
  
  it('returns a 400 with missing email and password', async () => {
    await request(app)
      .post('/api/events/users/signup/')
      .send({
        email: 'test@test.com'
      })
      .expect(400);
  
    await request(app)
      .post('/api/events/users/signup/')
      .send({
        password: 'alskjdf'
      })
      .expect(400);
  });
  
  it('disallows duplicate emails', async () => {
     return await request(app)
      .post('/api/events/users/signup/')
      .send({
        email: 'test000@test.com',
        password: 'password'
      })
      .expect(201);
  
    return await request(app)
      .post('/api/events/users/signup/')
      .send({
        email: 'test000@test.com',
        password: 'password'
      })
      .expect(400);
  });
  
 
  