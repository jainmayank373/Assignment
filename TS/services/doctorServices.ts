

import dal = require("../dal");
import Utility = require("../Utility");
import doctorsDto = require("../models/doctorsDto");
export class service {
    db = new dal.Dal();


    /**
     * 
     * @param id  unique username  
     * @param res response object to send response client
     * @return details of doctor or throw Exception
     * 
     */
    findById(id: any, res: any) {

        try {
            this.db.mongoConnect((driver: any, client: any) => {

                driver.findOne({ username: id })
                    .then((result: doctorsDto.DoctorsDto) => {

                        client.close();
                        res.json({ username: result.username, dob: result.dob, phone: result.phone });
                    })
                    .catch((err: any) => {
                        client.close();
                        res.send("user not found");
                    })
            }, Utility.Utility.dbName,
                Utility.Utility.doctorscollectionName)
        }
        catch (err) {
            console.log(err);
            res.statusCode = 400;
            res.send("Error occured!");
        }

    }
    /**
        * Getting list of Doctors
        * @param ids array of username  
        * @param res response object to send response client
        * @return details of doctor or throw Exception
        * 
        */
    findByIds(id: String, res: any) {
        try {
            this.db.mongoConnect((driver: any, client: any) => {

                driver.findMany({ patientsId: { $elemMatch: { $eq: id } } })
                    .then((result: any) => {

                        client.close();
                        res.json({ patints: result });
                    })
                    .catch((err: any) => {
                        client.close();
                        res.send("user not found");
                    })
            }, Utility.Utility.dbName,
                Utility.Utility.patientsCollectionName)
        }
        catch (error) {
            res.send(error);
        }

    }

    /**
     * 
     * @param data User/Doctor data 
     * @param res response object to send response client
     * @return details of newly inserted doctor or throw Exception
     */
    createRecords(data: any, res: any) {

        try {
            this.db.mongoConnect((driver: any, client: any) => {
                console.log("hello", data);
                if (!data && !data.username && !data.password && !data.dob) {

                    client.close();
                    res.send("please provide correct data!");
                }

                driver.findOne({ username: data.username })
                    .then((result: any) => {

                        if (!result) {
                            driver.insertOne(data)
                                .then((result: any) => {

                                    res.json(result);

                                    client.close();
                                })
                        }
                        else {

                            client.close();
                            res.send("user already present!");

                        }
                    })
                    .catch((err: any) => {
                        client.close();
                        console.log(err)
                    })
            }, Utility.Utility.dbName, Utility.Utility.doctorscollectionName);

        }
        catch (e) {
            console.log("Exception");
            res.statusCode = 400;
            res.send("Error found");
        }
    }

    /**
     * 
     * @param id  unique username
     * @param data User/doctor datato that needs to be updated
     * @param res response object to send response client
     * @return return updated records or Throw exception
     */
    updateRecords(id: any, data: any, res: any) {

        try {

            this.db.mongoConnect((driver: any, client: any) => {

                driver.updateOne({ username: id }, { $set: { name: data.name, address: data.address } }, { password: 0 })
                    .then((result: any) => {
                        res.json(result);
                    })
                    .catch((err: any) => {
                        client.close();
                        res.statusCode = 400;
                        res.send("error occured!");
                    })
            }, Utility.Utility.dbName, Utility.Utility.doctorscollectionName)
        }
        catch (err) {

            console.log("err", err);
            res.statusCode = 400;
            res.send(err);

        }

    }

    /**
     * 
     * @param id Unique username
     * @param res response object to send response client
     * @return whether user deletd or not
     */
    deleteRecords(id: any, res: any) {

        try {

            this.db.mongoConnect((driver: any, client: any) => {
                driver.deleteOne({ username: id })
                    .then((deleteRecords: any) => {
                        if (deleteRecords) {

                            client.close();
                            res.send("record deleted!");
                        }
                        else {

                            client.close();
                            res.send("could not delete user!");
                        }
                    })
            }, Utility.Utility.dbName, Utility.Utility.doctorscollectionName)
        }
        catch (err) {

            console.log("err", err);
            res.statusCode = 400;
            res.send(err);

        }

    }
}