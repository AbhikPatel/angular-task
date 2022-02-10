export interface Resumedata{
    id:number
    firstname: string,
    position: string,
    elemail:string,
    phone:number,
    technical:Tech[],
    experience:Experience[],
    education:Education[] 
}

interface Tech{
    tech:string
}

interface Experience{
    company:string,
    role:string,
    startyear:number,
    endyear:number
}

interface Education{
    school:string,
    gpa:number
}