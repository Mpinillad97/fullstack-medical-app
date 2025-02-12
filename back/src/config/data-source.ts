import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { Appointment } from "../entities/Appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: DB_PORT || 5432,
    username: DB_USERNAME || "postgres",
    password: DB_PASSWORD || "spartans117",
    database: DB_NAME || "proyecto_integrador_m3",
    // dropSchema: true,
    synchronize: true, 
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
});

export const userModel = AppDataSource.getRepository(User);
export const credentialModel = AppDataSource.getRepository(Credential);
export const appointmentModel = AppDataSource.getRepository(Appointment);