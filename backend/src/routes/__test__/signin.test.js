import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
});

it('fails when an incorrect password is supplied', async () => {
  await request(app)
    .post('/api/events/users/signup/')
    .send({
      email: 'test11@test.com',
      password: 'passw333'
    })
    .expect(201);

  await request(app)
    .post('/api/events/users/signup/')
    .send({
      email: 'test11@test.com',
      password: 'aslkdfjalskdfj'
    })
    .expect(400);
});

