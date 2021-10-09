import mongoose from "mongoose";
import config from "config";

// utils
import logger from './logger'

async function connect(){
 const dbUri = config.get<string>("dbUri");

 try{
     await mongoose.connect(dbUri);
     logger.info("DB Connected");
 } catch(error){
    logger.error("Could not connect to the DB!");
     process.exit(1);
 }
}

export default connect