"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.MONGO_DB_URL = "mongodb://localhost:27017";
    Utility.dbName = "healthcare";
    Utility.doctorscollectionName = "doctors";
    Utility.patientsCollectionName = "patient";
    return Utility;
}());
exports.Utility = Utility;
