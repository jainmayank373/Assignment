export class DoctorsModel{
    username:String;
    password:String;
    dob:Date;
    phone:String;
    patientsId:Array<String>
    constructor(username:String,password:String,dob:Date,phone:String,patientsId:Array<String>){
        this.username = username;
        this.password =password;
        this.dob  =  dob;
        this.phone = phone;
        this.patientsId = patientsId;

    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    getDob(){
        return this.dob;
    }
    getpatientsId(){
        return this.patientsId;
    }
    
    getPhone(){
        return this.phone;
    }
    
    setUsername(username:String){
        this.username = username;
    }
    setPassword(password:String){
         this.password = password;
    }
    setDob(dob:Date){
         this.dob = dob;
    }
    setPhone(phone:String){
        this.phone = phone;
    }
    
    setpate(patientsId:Array<String>){
        this.patientsId = patientsId;
    }
}