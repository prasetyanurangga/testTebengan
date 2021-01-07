import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Ride {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", width: 100, nullable: false})
    from_city_name: string;

    @Column({type: "varchar", width: 100, nullable: false})
    to_city_name: string;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({
    	name: "user_id"
    })
    @Column({select: true, type: "int", nullable: false})
    user_id: number;

}