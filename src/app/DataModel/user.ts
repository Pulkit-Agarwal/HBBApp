import { Dependent } from "./dependent";
import { Policy } from './policy';

export class User{

    firstName:string="";
    lastName:string="";
    Id:Number;
    email:string="";
    password:string ="";
    employeeType:string="";
    primaryCardNumber:string="";
    policies?:number[]=[];//if allpolicies field works then remove this 
    allPolicies?:Policy[]=[];
    //dependents?:number[]=[];
    dependents?:Dependent[]=[];
}