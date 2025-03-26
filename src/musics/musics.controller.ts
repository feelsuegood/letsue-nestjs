import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MusicsService } from './musics.service';
import { Music } from './entities/music.entity';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';

@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Get()
  getAll(): Music[] {
    return this.musicsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') musicId: number): Music | undefined {
    return this.musicsService.getOne(musicId);
  }

  @Post()
  create(@Body() musicData: CreateMusicDto) {
    return this.musicsService.create(musicData);
  }

  @Delete(':id')
  remove(@Param('id') musicID: number) {
    return this.musicsService.deleteOne(musicID);
  }

  @Patch(':id')
  patch(@Param('id') musicID: number, @Body() updateData: UpdateMusicDto) {
    return this.musicsService.update(musicID, updateData);
  }
}
