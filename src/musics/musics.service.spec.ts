import { Test, TestingModule } from '@nestjs/testing';
import { MusicsService } from './musics.service';
import { NotFoundException } from '@nestjs/common';

describe('MusicsService', () => {
  let service: MusicsService;

  // afterAll(), afterEach() other options
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicsService],
    }).compile();

    service = module.get<MusicsService>(MusicsService);
    // it applies all codes below
    // service.create({
    //   title: 'Test music',
    //   year: 2025,
    //   artists: ['Test singer'],
    // });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return anarray', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('shoud get a music', () => {
      service.create({
        title: 'Test music',
        year: 2025,
        artists: ['Test singer'],
      });
      const music = service.getOne(1);
      expect(music).toBeDefined();
      // expect(music.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        // expect(e.message).toEqual(`Music with ID 999 not found.`);
      }
    });
  });
  describe('deleteOne', () => {
    it('deletes a music', () => {
      service.create({
        title: 'Test music',
        year: 2025,
        artists: ['Test singer'],
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });
    it('should return a 404', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
  describe('create', () => {
    it('should creat a music', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Test music',
        year: 2025,
        artists: ['Test singer'],
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', () => {
    it('should update a music', () => {
      service.create({
        title: 'Test music',
        year: 2025,
        artists: ['Test singer'],
      });
      service.update(1, { title: 'Updated Test' });
      const music = service.getOne(1);
      expect(music.title).toEqual('Updated Test');
    });
    it('should throw a NotFoundException', () => {
      try {
        service.update(999, { title: 'Updated Test' });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
