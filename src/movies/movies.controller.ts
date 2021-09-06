import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get(":id")     // 이 함수가 다른 함수들보다 위에 있으면 다른 함수에서도 id값을 요청하게됨
    getOne(@Param("id") movieId : string) : Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    deleteMovie(@Param('id') movieId  : string) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')      // Patch와 비슷하나 Put은 모든 리소스를 바꾸어버림. Patch는 일부 리소스만 Change
    patchMovie(@Param('id') movieId : string, @Body() updateData) {
        return this.moviesService.update(movieId, updateData);
    }
}
