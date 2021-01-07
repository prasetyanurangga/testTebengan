import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Ride} from "./Ride";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", width: 50, nullable: false})
    first_name: string;

    @Column("varchar", { length: 50 })
    last_name: string;

    @OneToMany(() => Ride, ride => ride.user_id)
    rides: Ride[]

}
