import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT || 3333, () => console.log("Server is up"));
