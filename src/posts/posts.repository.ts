import { EntityRepository, Repository } from "typeorm";
import { Post } from "../entity/post.entity";

@EntityRepository(Post)
export class PostsRepository extends Repository<Post> {
    
}