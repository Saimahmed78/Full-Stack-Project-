import app from "./app.js";
import dontenv from "dotenv";
import dbconnection from "./db/db.connection.js";
import healthcheck from "./controllers/healthcheck.controllers.js";


//import healthcheck route

dontenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 3000;

dbconnection();

app.use("/api/v1/hc", healthcheck);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
