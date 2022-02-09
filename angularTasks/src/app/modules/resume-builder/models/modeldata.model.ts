export interface Resumedata{
    id:number
    firstname: string,
    position: string,
    elemail:string,
    phone:number,
    technical:string[],
    experience:Experience[] 
}

interface Experience{
    company:string,
    role:string,
    startyear:number,
    endyear:number
}