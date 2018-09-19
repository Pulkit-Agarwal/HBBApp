import { Injectable } from '@angular/core';
import { Policy} from '../DataModel/policy';
import { Dependent} from '../DataModel/dependent';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  policies:Policy[]=[];
  apolicy:Policy = new Policy();
  bpolicy:Policy = new Policy();
  dependents:Dependent[]=[];
 
  adependent:Dependent = new Dependent();
  bdependent:Dependent = new Dependent();
  cdependent:Dependent = new Dependent();
  ddependent:Dependent = new Dependent();

  edependent:Dependent = new Dependent();
  fdependent:Dependent = new Dependent();
  gdependent:Dependent = new Dependent();
  hdependent:Dependent = new Dependent();

  constructor() { }

  public initPolicies(){
    this.apolicy.dependents = 4;
   this.apolicy.insurer ="LTI";
   this.apolicy.insured = "Milind Soman";
   this.apolicy.policyId =1;
   this.apolicy.policyName ="Group Policy";
   this.apolicy.policyType ="Employee Health";
   this.apolicy.startDate = new Date("1/1/2018");
   this.apolicy.endDate = new Date("1/1/2019");
   this.apolicy.netPremium = 100;
   this.apolicy.grossPremium =150;
   this.apolicy.taxes = 12;
   this.apolicy.sumInsured = 4000;
   this.apolicy.isAddBenefit1 = true;
   this.apolicy.isIncreasedSumInsured = true;
   this.policies.push(this.apolicy);

   this.bpolicy.dependents = 4;
   this.bpolicy.insurer ="LTI";
   this.bpolicy.insured = " Brajesh Pandey";
   this.bpolicy.policyId =2;
   this.bpolicy.policyName ="Group Policy";
   this.bpolicy.policyType ="Employee Health";
   this.bpolicy.startDate = new Date("1/2/2018");
   this.bpolicy.endDate =   new Date("1/2/2019");
   this.bpolicy.netPremium = 110;
   this.bpolicy.grossPremium =250;
   this.bpolicy.taxes = 15;
   this.bpolicy.sumInsured = 5000;
   this.bpolicy.isAddBenefit2 = true;
   this.policies.push(this.bpolicy);
  }
  
  public initDependents(){

  // this.adependent.age = 30;
  // this.adependent.cardNumber = "XX-XXXX-01";
  // this.adependent.dob = new Date("10-Nov-1988");
  // this.adependent.gender = "M";
  // this.adependent.id = 1;
  // this.adependent.name = "Pankaj Motewar";
  // this.adependent.relation ="Friend";
  // this.dependents.push(this.adependent);

  // this.bdependent.age = 28;
  // this.bdependent.cardNumber = "XX-XXXX-02";
  // this.bdependent.dob = new Date("10-March-1990");
  // this.bdependent.gender = "M";
  // this.bdependent.id = 2;
  // this.bdependent.name = "Omkar Deshpande";
  // this.bdependent.relation ="Friend";
  // this.dependents.push(this.bdependent);

  // this.cdependent.age = 31;
  // this.cdependent.cardNumber = "XX-XXXX-03";
  // this.cdependent.dob = new Date("10-Nov-1989");
  // this.cdependent.gender = "M";
  // this.cdependent.id = 3;
  // this.cdependent.name = "Ganesh Gude";
  // this.cdependent.relation ="Friend";
  // this.dependents.push(this.cdependent);

  // this.ddependent.age = 25;
  // this.ddependent.cardNumber = "XX-XXXX-04";
  // this.ddependent.dob ="10-Dec-1992";
  // this.ddependent.gender = "F";
  // this.ddependent.id = 4;
  // this.ddependent.name = "Priyanka Vaishnav";
  // this.ddependent.relation ="Friend";
  // this.dependents.push(this.ddependent);

  // this.edependent.age = 30;
  // this.edependent.cardNumber = "XX-XXXX-05";
  // this.edependent.dob ="10-Dec-1988";
  // this.edependent.gender = "F";
  // this.edependent.id = 5;
  // this.edependent.name = "Yogini Alhat";
  // this.edependent.relation ="Friend";
  // this.dependents.push(this.edependent);

  // this.fdependent.age = 33;
  // this.fdependent.cardNumber = "XX-XXXX-06";
  // this.fdependent.dob ="10-Dec-1985";
  // this.fdependent.gender = "M";
  // this.fdependent.id = 6;
  // this.fdependent.name = "Anand Lokhande";
  // this.fdependent.relation ="Friend";
  // this.dependents.push(this.fdependent);

  // this.gdependent.age = 26;
  // this.gdependent.cardNumber = "XX-XXXX-07";
  // this.gdependent.dob ="10-Dec-1994";
  // this.gdependent.gender = "M";
  // this.gdependent.id = 7;
  // this.gdependent.name = "Ankur Agarwal";
  // this.gdependent.relation ="Friend";
  // this.dependents.push(this.gdependent);


  // this.hdependent.age = 35;
  // this.hdependent.cardNumber = "XX-XXXX-08";
  // this.hdependent.dob ="10-Dec-1983";
  // this.hdependent.gender = "M";
  // this.hdependent.id = 8;
  // this.hdependent.name = "Sunil Shinde";
  // this.hdependent.relation ="Friend";
  // this.dependents.push(this.hdependent);

}
 public getPolicyFromId(policyId:number):Policy{
  return this.policies.filter(p=>p.policyId == policyId)[0];
  }
}
