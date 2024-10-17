import { DataSource } from "typeorm";
import { Customer } from "../src/models/customerModel"
import { Task } from "../src/models/taskModel";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "val2110#",
    database: "CRM",
    synchronize: true,
    logging: true,
    entities: [Customer, Task],
    subscribers: [],
    migrations: []
})