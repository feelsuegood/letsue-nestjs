import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // * don't forget set an environment same with a real app
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Music API');
  });

  describe('/musics', () => {
    it('GET', () => {
      return request(app.getHttpServer()).get('/musics').expect(200).expect([]);
    });
    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/musics')
        .send({
          title: 'Test music',
          year: 2025,
          artists: ['Test singer'],
        })
        .expect(201);
    });
    it('POST 400', () => {
      return request(app.getHttpServer())
        .post('/musics')
        .send({
          title: 'Test music',
          year: 2025,
          artists: ['Test singer'],
          other: 'thing',
        })
        .expect(400);
    });
    it('DELETE 404', () => {
      return request(app.getHttpServer()).delete('/musics').expect(404);
    });
  });
  describe('/musics/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/musics/1').expect(200);
    });
    it('GET 404', () => {
      return request(app.getHttpServer()).get('/musics/999').expect(404);
    });
    it('PATCH 200', () => {
      return request(app.getHttpServer())
        .patch('/musics/1')
        .send({ title: 'Updated Test' })
        .expect(200);
    });
    it('DELETE 200', () => {
      return request(app.getHttpServer()).delete('/musics/1').expect(200);
    });
  });
});
