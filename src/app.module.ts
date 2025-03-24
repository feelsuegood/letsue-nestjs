import { Module } from '@nestjs/common';
import { MusicsModule } from './musics/musics.module';
import { AppController } from './app.controller';

@Module({
  imports: [MusicsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
