import { Module } from '@nestjs/common';
import { MusicController } from './music/music.controller';
import { MusicService } from './music/music.service';

@Module({
  imports: [],
  controllers: [MusicController],
  providers: [MusicService],
})
export class AppModule {}
