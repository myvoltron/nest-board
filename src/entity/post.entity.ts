import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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
}
