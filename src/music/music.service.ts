import { Injectable } from '@nestjs/common';
import { Music } from './entities/music.entity';

@Injectable()
export class MusicService {
  // database
  private music: Music[] = [];

  getAll(): Music[] {
    return this.music;
  }
}
