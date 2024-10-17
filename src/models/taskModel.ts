import { Entity,
    PrimaryGeneratedColumn, 
    Column,
    ManyToOne, 
} from "typeorm";
import { Customer } from "./customerModel";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne((type) => Customer, (customer) => customer.tasks)
    customer: Customer;
}
