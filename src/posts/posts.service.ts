import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {} 

  async create(createPostDto: CreatePostDto) {
    try {
      const post = this.postsRepository.create({
        title: createPostDto.title, 
        content: createPostDto.content
      });
      const result = await this.postsRepository.save(post); 
      return result; 
    } catch (error) {
      console.error(error);
    }
  }

  async findAll() {
    try {
      const posts = await this.postsRepository.find(); 
      return posts;  
    } catch (error) {
      console.error(error)
    }
  }

  async findOne(id: number) {
    try {
      const post = await this.postsRepository.findOne({ where: { id }, }); 
      return post; 
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    try {
      const post = await this.findOne(id); 
      post.title = updatePostDto.title;
      post.content = updatePostDto.content; 
      return await this.postsRepository.save(post);
    } catch (error) {
      console.error(error);
      // throw error; 
    }
  }

  async remove(id: number) {
    try {
      return await this.postsRepository.delete({ id });
    } catch (error) {
      console.error(error);
    }
  }
}
