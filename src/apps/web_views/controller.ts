import { Request, Response } from "express";

export function getHome(_: Request, res: Response) {
  return res.render("pages/home");
}
