import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("search")
    search(@Query("year") searchingYear: String) {
        return `We are searching for a movie with a title made after : ${searchingYear}`;
    }

    @Get(":id")     // 이 함수가 다른 함수들보다 위에 있으면 다른 함수에서도 id값을 요청하게됨
    getOne(@Param("id") movieId : string ) {
        return `This will return one movies with id : ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Delete("/:id")
    deleteMovie(@Param('id') movieId  : string) {
        return `This will delete a movie with the id : ${movieId}`;
    }

    @Patch(':id')      // Patch와 비슷하나 Put은 모든 리소스를 바꾸어버림. Patch는 일부 리소스만 Change
    patchMovie(@Param('id') movieId : string, @Body() updateData) {
        return {
            updatedMovie: movieId, 
            ...updateData
        }
    }
}
