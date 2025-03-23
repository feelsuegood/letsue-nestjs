import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { Music } from './entities/music.entity';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  getAll(): Music[] {
    return this.musicService.getAll();
  }

  //   it should be located above @Get(':id')s
  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `We want to find music made after: ${searchingYear}`;
  // }

  @Get(':id')
  getOne(@Param('id') musicId: string): Music | undefined {
    return this.musicService.getOne(musicId);
  }

  @Post()
  create(@Body() musicData) {
    return this.musicService.create(musicData);
  }

  @Delete(':id')
  remove(@Param('id') musicID: string) {
    return this.musicService.deleteOne(musicID);
  }

  @Patch(':id')
  patch(@Param('id') musicID: string, @Body() updateData) {
    return this.musicService.update(musicID, updateData);
  }
}
