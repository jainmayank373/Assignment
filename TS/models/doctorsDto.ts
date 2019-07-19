export class DoctorsDto{
    username:String;
    dob:Date;
    phone:String;
    constructor(username:String,dob:Date,phone:String){
        this.username = username;
        this.dob  =  dob;
        this.phone = phone;

    }
    getUsername(){
        return this.username;
    }
    getDob(){
        return this.dob;
    }
    getPhone(){
        return this.phone;
    }
      setUsername(username:String){
        this.username = username;
    }
    setDob(dob:Date){
         this.dob = dob;
    }
    setPhone(phone:String){
        this.phone = phone;
    }
    
}