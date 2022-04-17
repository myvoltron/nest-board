import { type } from "os";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @ManyToOne(
        (type) => User,
        (user) => user.comments, 
    )
    user: User; 

    @ManyToOne(
        (type) => Post,
        (post) => post.comments, 
    )
    post: Post;
}
