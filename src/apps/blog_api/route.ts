import { getAll, getOne } from "./controller";
import { Router } from "express";

const route = Router();
route.get("/", getAll);
route.get("/:slug", getOne);

export default route;
