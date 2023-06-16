import { Article, Athlete, MonthlyPlan, TrainingPlan } from "../Services/Interfaces";

export async function listSome({thing}:any): Promise<any>{
   const list = await fetch('http://localhost:4040/'+
    thing + 'list').then(res=>res.json())
    console.log(list)
    return list
}
// </any>

export async function listMonthly(): Promise<MonthlyPlan>{
    return await listSome('monthlyPlan')
}
export async function listAtletas(): Promise<Athlete>{
    return await  listSome('atleta')
} 
export  async function listPlan(): Promise<TrainingPlan>{
    return await listSome('trainingPlan')
}

