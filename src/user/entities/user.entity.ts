import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    email:string;

    @Column()
    firstName:String;

    @Column()
    lastName:String;

    @Column()
    age:Number;
}
