import "reflect-metadata";
import { AppDataSource } from "./data-source";
import customerRoutes from "./routes/customerRoutes";
import taskRoutes from "./routes/taskRoutes"
import express from "express";

const app = express();
app.use(express.json());

app.use("/customers", customerRoutes);
app.use("/tasks", taskRoutes);

app.listen(3000, () => {
    AppDataSource.initialize()
        .then(() => {
            console.log("Conexão com banco de dados estabelecida com sucesso!")
        })
        .catch((error) => console.log(error))
    console.log(`Server running on port 3000`)
});

