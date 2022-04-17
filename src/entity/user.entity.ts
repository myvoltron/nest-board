import { type } from "os";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";
import { Post } from "./post.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string;

    @Column()
    email: string; 

    @Column()
    password: string; 

    @OneToMany(
        (type) => Post,
        (post) => post.user, 
    )
    posts: Post[];

    @OneToMany(
        (type) => Comment,
        (comment) => comment.user, 
    )
    comments: Comment[];
}
