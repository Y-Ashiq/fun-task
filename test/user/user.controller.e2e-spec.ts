import { Test, TestingModule } from '@nestjs/testing';
import { Body, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../../src/app.module';

let app: INestApplication<App>;

beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  await app.init();
});
describe('userController (e2e)', () => {
  it('/users/addUser (POST) - create new user with auto UUID', async () => {
    const newUser = { name: 'Test User' };
    const response = await request(app.getHttpServer())
      .post('/users/addUser')
      .send(newUser)
      .expect(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newUser.name);
  });
  it('/users/:id/events (get) -retrive user events', async () => {
    return await request(app.getHttpServer())
      .get('/users/e179c723-c03f-435e-9a4f-672412335898/events')
      .expect(200)
      .expect(Body);
  });
});

afterAll(async () => {
  await app.close();
});
