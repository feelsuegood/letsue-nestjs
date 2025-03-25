import { Injectable, NotFoundException } from '@nestjs/common';
import { Music } from './entities/music.entity';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';

@Injectable()
export class MusicsService {
  // database
  private musics: Music[] = [];

  getAll(): Music[] {
    return this.musics; // real database has database query
  }
  getOne(id: number): Music {
    const music = this.musics.find((music) => music.id === id);
    if (!music) {
      throw new NotFoundException(`Music with ID ${id} not found.`);
    }
    return music;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.musics = this.musics.filter((music) => music.id !== id);
  }

  create(musicData: CreateMusicDto) {
    this.musics.push({
      id: this.musics.length + 1,
      ...musicData,
    });
  }

  update(id: number, updateData: UpdateMusicDto) {
    const music = this.getOne(id);
    this.deleteOne(id);
    this.musics.push({ ...music, ...updateData });
  }
}
