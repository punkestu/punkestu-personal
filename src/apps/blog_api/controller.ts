import {Request, Response} from "express";
import {getBlog, getBlogs} from "./repo";

export function getAll(_: Request, res: Response) {
    res.json(getBlogs());
}

export function getOne(req: Request, res: Response) {
    const blog = getBlog(req.params.slug);
    if(blog){
        return res.json(blog);
    }
    res.status(404).json({message: "Not found"});
}