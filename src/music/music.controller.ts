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

@Controller('music')
export class MusicController {
  @Get()
  getAll() {
    return 'This will return all music';
  }

  //   it should be located above @Get(':id')s
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We want to find music made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') musicId: string) {
    return `This will return one music with the id ${musicId}`;
  }

  @Post()
  create(@Body() musicData) {
    return musicData;
  }

  @Delete(':id')
  remove(@Param('id') musicID: string) {
    return `This will delete music with the id ${musicID}`;
  }

  @Patch(':id')
  patch(@Param('id') musicID: string, @Body() updateData) {
    return {
      updateMusic: musicID,
      ...updateData,
    };
  }
}
