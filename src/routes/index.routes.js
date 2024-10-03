import { Router } from "express";

const routes = Router ();

routes.get("/", (req, res) => { //request, response
    return res.status(200). send({ message: "Servidor ta funfando amores!"})
});


export default routes;