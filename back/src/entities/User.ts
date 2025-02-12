import Bloodtype from "../interfaces/bloodtype"
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import {Credential} from "./Credential"
import {Appointment} from "./Appointment"

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column('date')
    birthdate: Date

    @Column()
    nDni: string

    @Column()
    bloodtype: Bloodtype

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[]
}