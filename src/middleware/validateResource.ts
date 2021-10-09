import {Request, Response, NextFunction} from "express";
import {AnyZodObject} from "zod";


const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) =>{

    // validate schema -> if not return 400 and tell the errors to the user
    try{
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        })
    }catch(e: any){
        return res.status(400).send(e.errors);
    }
 }

 export default validate;