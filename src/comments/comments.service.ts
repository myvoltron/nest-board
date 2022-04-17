import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entity/comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    try {
      const comment = this.commentsRepository.create({
        content: createCommentDto.content, 
      });
      const result = await this.commentsRepository.save(comment);
      return result; 
    } catch (error) {
      console.error(error); 
    }
  }

  async findAll() {
    try {
      const comments = await this.commentsRepository.find();
      return comments; 
    } catch (error) {
      console.error(error);
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} comment`;
  // }

  async findByUserId(userId: number) {
    try {
      const comments = await this.commentsRepository.find({ where: {
        userId
      } }); 
      return comments; 
    } catch (error) {
      console.error(error);
    }
  }

  async findByPostId(postId: number) {
    try {
      const comments = await this.commentsRepository.find({ where: {
        postId
      } }); 
      return comments; 
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    try {
      const comment = await this.commentsRepository.findOne({ where: { id } });
      comment.content = updateCommentDto.content; 
      return await this.commentsRepository.save(comment); 
    } catch (error) {
      console.error(error); 
    }
  }

  async remove(id: number) {
    try {
      return await this.commentsRepository.delete({ id });
    } catch (error) {
      console.error(error); 
    }
  }
}
