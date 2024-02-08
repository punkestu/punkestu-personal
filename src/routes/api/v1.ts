import {Router} from "express";
import BlogAPI from "../../apps/blog_api/route";

const route = Router();
route.use("/blogs", BlogAPI);

route.use("*", (_,res)=>res.status(404).json({message: "API not found"}));

export default route;