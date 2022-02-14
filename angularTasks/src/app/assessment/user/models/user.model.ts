export class User{
    id:number
    fullname:string
    mail:string
    mobile:number
    city:string
    gender:string
    department:Department[]

    constructor(id:number, fullname:string, mail:string, mobile:number, city:string, gender:string )
    {
        this.id = id;
        this.fullname = fullname;
        this.mail = mail;
        this.mobile = mobile;
        this.city = city;
        this.gender = gender;
    } 
}

export class Department{
    id:number
    name:string

    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }
}