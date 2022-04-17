import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { User } from './entity/user.entity';
import { Comment } from './entity/comment.entity';

@Module({
  imports: [PostsModule, UsersModule, CommentsModule, 
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306, 
    username: 'root', 
    password: '111111',
    database: 'nest-board', 
    entities: [Post, User, Comment], 
    synchronize: true,  
  })],
})
export class AppModule {}
