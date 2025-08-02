import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

let app: INestApplication;

beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  await app.init();
});
describe('eventsController (e2e)', () => {
  it('/events/createEvent (POST) - create new event for user', async () => {
    // You should create a user first and use its id here
    const userId = 'e179c723-c03f-435e-9a4f-672412335898'; // Replace with a valid user UUID
    const newEvent = {
      user: userId,
      event_name: 'Test Event',
      execute_at: new Date(Date.now() + 60 * 1000).toISOString(), // 1 min in future
    };
    const response = await request(app.getHttpServer())
      .post('/events/createEvent')
      .send(newEvent)
      .expect(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.user).toBe(userId);
    expect(response.body.event_name).toBe(newEvent.event_name);
  });
});

afterAll(async () => {
  await app.close();
});
