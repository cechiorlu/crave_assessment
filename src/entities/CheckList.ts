import { ObjectType, Field } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";
import { ProgressCategory } from "./ProgressCategory";

@ObjectType()
@Entity()
export class CheckLiist extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column({default: false})
    isChecked: boolean;

    @Field()
    @ManyToOne(() => ProgressCategory, (progressCategory) => progressCategory.id)
    progressCategory: ProgressCategory;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}