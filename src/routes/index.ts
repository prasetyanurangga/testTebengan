import { Router, Request, Response } from "express";
import api from "./api";

const routes = Router();

routes.use("/api", api);

export default routes;