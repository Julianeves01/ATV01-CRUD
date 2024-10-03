import { Router } from "express";
import planetasRoutes from "./planetas.routes.js";

const routes = Router ();

routes.get("/", (req, res) => { //request, response
    return res.status(200). send({ message: "Servidor ta funfando amores!"})
});

routes.use("/planetas", planetasRoutes)

export default routes;