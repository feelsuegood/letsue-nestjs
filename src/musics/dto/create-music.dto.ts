import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMusicDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly artists: string[];
}
