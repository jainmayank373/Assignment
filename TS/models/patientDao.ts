export class PatientModel{
    username:String;
    password:String;
    dob:Date;
    phone:String;
    doctorsId:Array<String>;
    
    constructor(username:String,password:String,dob:Date,phone:String,doctorsId:Array<String>){
        this.username = username;
        this.password =password;
        this.dob  =  dob;
        this.phone = phone;
        this.doctorsId = doctorsId;

    }
    getUsername(){
        return this.username;
    }

    getDoctorsId(){
        return this.doctorsId;
    }
    getPassword(){
        return this.password;
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
    setPassword(password:String){
         this.password = password;
    }
    setDob(dob:Date){
         this.dob = dob;
    }
    setPhone(phone:String){
        this.phone = phone;
    }
    
    setDoctorsId(doctorsId:Array<String>){
        this.doctorsId = doctorsId;
    }
}