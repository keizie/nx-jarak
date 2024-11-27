import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() comment: Comment) {
    return this.commentService.create(comment);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.commentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() comment: Comment) {
    return this.commentService.update(id, comment);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.commentService.remove(id);
  }
}
