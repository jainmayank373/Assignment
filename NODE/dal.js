"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = require("./Utility");
var mongodb = require("mongodb");
var Dal = /** @class */ (function () {
    function Dal() {
        this.mongoClient = mongodb.MongoClient;
    }
    Dal.prototype.mongoConnect = function (callback, dbName, collName) {
        this.mongoClient.connect(Util.Utility.MONGO_DB_URL, { useNewUrlParser: true }, function (err, client) {
            if (err)
                throw new Error("failed to connect");
            else {
                var db = client.db(dbName);
                var collection = db.collection(collName);
                console.log("Connected..!");
                callback(collection, client);
            }
        });
    };
    return Dal;
}());
exports.Dal = Dal;
