import {Router} from "express";
import webView from "../apps/web_views/route";

const route = Router();
route.use("/", webView);

export default route;