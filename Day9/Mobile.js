"use strict";
exports.__esModule = true;
var BasicPhone_1 = require("./BasicPhone");
var SmartPhone_1 = require("./SmartPhone");
var Mobile = /** @class */ (function () {
    function Mobile(ID, Name, Cost) {
        this.mobileID = ID;
        this.mobilename = Name;
        this.mobileCost = Cost;
    }
    Mobile.prototype.printMobileDetails = function (mobileType) {
        return console.log("The  Mobile id " + " " + this.mobileID + " The  Mobile name " + this.mobilename + "" + " cost of the mobile is " + this.mobileCost + " this is Type" + " " + mobileType);
    };
    return Mobile;
}());
var vivo = new Mobile(12, " vivo", 10);
var IphonePro = new Mobile(88, " IphonePro", 2000);
//   const newBile = new Mobile(12, "ssss",500,"ghfh" );
//   console.log(newBile);
//   console.log(newBile.printMobileDetails());
//set new type
var adroid = new SmartPhone_1.SmartPhone("Adroid");
var apple = new BasicPhone_1.BasicPhone("IOS");
//
console.log(vivo.printMobileDetails(adroid.mobileType));
console.log(IphonePro.printMobileDetails(apple.mobileType));
