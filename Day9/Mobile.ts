import { BasicPhone } from "./BasicPhone";
import {  SmartPhone } from "./SmartPhone";

class Mobile {
    mobileID: number;
    mobilename: string;
    mobileCost: number;
   
    public  constructor(ID:number, Name:string, Cost:number ){
        this.mobileID = ID;
        this.mobilename = Name;
        this.mobileCost = Cost;
       }
       public printMobileDetails(mobileType: string) {
        return console.log("The  Mobile id " + " " + this.mobileID + " The  Mobile name " + this.mobilename + "" +   " cost of the mobile is " +  this.mobileCost  + " this is Type" + " " + mobileType)
      }

  }

 const vivo = new Mobile(12, " vivo" , 10 );
const IphonePro = new Mobile(88, " IphonePro" ,  2000 );
//   const newBile = new Mobile(12, "ssss",500,"ghfh" );
//   console.log(newBile);
//   console.log(newBile.printMobileDetails());
//set new type
const adroid = new SmartPhone("Adroid");
const apple = new BasicPhone("IOS");
//
console.log(vivo.printMobileDetails(adroid.mobileType))
console.log(IphonePro.printMobileDetails(apple.mobileType))



   
