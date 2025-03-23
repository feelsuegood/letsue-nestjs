import { Injectable, NotFoundException } from '@nestjs/common';
import { Music } from './entities/music.entity';

@Injectable()
export class MusicService {
  // database
  private music: Music[] = [];

  getAll(): Music[] {
    return this.music; // real database has database query
  }
  getOne(id: string): Music {
    const music = this.music.find((music) => music.id === +id);
    if (!music) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return music;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.music = this.music.filter((music) => music.id !== +id);
  }

  create(musicData) {
    this.music.push({
      id: this.music.length + 1,
      ...musicData,
    });
  }

  update(id: string, updateData) {
    const music = this.getOne(id);
    this.deleteOne(id);
    this.music.push({ ...music, ...updateData });
  }
}
