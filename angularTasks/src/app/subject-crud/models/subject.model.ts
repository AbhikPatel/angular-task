export class SubjectModel{
    fname: string
    lname: string
    age:number
    gender:string

    constructor( fname: string, lname: string, age:number, gender:string)
    {
        this.fname = fname
        this.lname = lname
        this.age = age
        this.gender = gender
    } 
}