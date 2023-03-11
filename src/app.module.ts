import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { MoviesService } from './tmdb-gofile/services/movies.service';
import { GoFileService } from './tmdb-gofile/services/go-file.service';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule],
  controllers: [],
  providers: [MoviesService, GoFileService],
})
export class AppModule {}
