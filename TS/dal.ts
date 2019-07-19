import Util = require("./Utility");
import mongodb = require("mongodb");
export class Dal{
        
        mongoClient = mongodb.MongoClient;
    
        
        mongoConnect(callback:Function,dbName:any,collName:any){

            this.mongoClient.connect(Util.Utility.MONGO_DB_URL,{ useNewUrlParser: true },(err,client)=>{
                    if(err)
                        throw new Error("failed to connect");
                    else{
                        const db = client.db(dbName);
                        const collection = db.collection(collName);
                        console.log("Connected..!");
                        callback(collection,client);
                    }
            })
                }
}