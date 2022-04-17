import { type } from "os";
import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, ManyToOne, OneToMany } from "typeorm";
import { Comment } from "./comment.entity";
import { User } from "./user.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    title: string;

    @Column()
    content: string; 

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @ManyToOne(
        (type) => User,
        (user) => user.posts
    )
    user: User;
    
    @OneToMany(
        (type) => Comment,
        (comment) => comment.post, 
    )
    comments: Comment[];
}
