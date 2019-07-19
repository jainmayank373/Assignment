"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dal = require("./dal");
var Utility = require("./Utility");
var service = /** @class */ (function () {
    function service() {
        this.db = new dal.Dal();
    }
    /**
     *
     * @param id  unique username
     * @param res response object to send response client
     * @return details of doctor or throw Exception
     *
     */
    service.prototype.findById = function (id, res) {
        try {
            this.db.mongoConnect(function (driver, client) {
                driver.findOne({ username: id })
                    .then(function (result) {
                    client.close();
                    res.json({ username: result.username, dob: result.dob, phone: result.phone });
                })
                    .catch(function (err) {
                    client.close();
                    res.send("user not found");
                });
            }, Utility.Utility.dbName, Utility.Utility.collectionName);
        }
        catch (err) {
            console.log(err);
            res.statusCode = 400;
            res.send("Error occured!");
        }
    };
    /**
     *
     * @param data User/Doctor data
     * @param res response object to send response client
     * @return details of newly inserted doctor or throw Exception
     */
    service.prototype.createRecords = function (data, res) {
        try {
            this.db.mongoConnect(function (driver, client) {
                console.log("hello", data);
                if (!data && !data.username && !data.password && !data.dob) {
                    client.close();
                    res.send("please provide correct data!");
                }
                driver.findOne({ username: data.username })
                    .then(function (result) {
                    if (!result) {
                        driver.insertOne(data)
                            .then(function (result) {
                            res.json(result);
                            client.close();
                        });
                    }
                    else {
                        client.close();
                        res.send("user already present!");
                    }
                })
                    .catch(function (err) {
                    client.close();
                    console.log(err);
                });
            }, Utility.Utility.dbName, Utility.Utility.collectionName);
        }
        catch (e) {
            console.log("Exception");
            res.statusCode = 400;
            res.send("Error found");
        }
    };
    /**
     *
     * @param id  unique username
     * @param data User/doctor datato that needs to be updated
     * @param res response object to send response client
     * @return return updated records or Throw exception
     */
    service.prototype.updateRecords = function (id, data, res) {
        try {
            this.db.mongoConnect(function (driver, client) {
                driver.updateOne({ username: id }, { $set: { name: data.name, address: data.address } }, { password: 0 })
                    .then(function (result) {
                    res.json(result);
                })
                    .catch(function (err) {
                    client.close();
                    res.statusCode = 400;
                    res.send("error occured!");
                });
            }, Utility.Utility.dbName, Utility.Utility.collectionName);
        }
        catch (err) {
            console.log("err", err);
            res.statusCode = 400;
            res.send(err);
        }
    };
    /**
     *
     * @param id Unique username
     * @param res response object to send response client
     * @return whether user deletd or not
     */
    service.prototype.deleteRecords = function (id, res) {
        try {
            this.db.mongoConnect(function (driver, client) {
                driver.deleteOne({ username: id })
                    .then(function (deleteRecords) {
                    if (deleteRecords) {
                        client.close();
                        res.send("record deleted!");
                    }
                    else {
                        client.close();
                        res.send("could not delete user!");
                    }
                });
            }, Utility.Utility.dbName, Utility.Utility.collectionName);
        }
        catch (err) {
            console.log("err", err);
            res.statusCode = 400;
            res.send(err);
        }
    };
    return service;
}());
exports.service = service;
