import { Injectable, OnInit } from '@angular/core';
import {User} from '../DataModel/user';
import {Dependent} from '../DataModel/dependent';
import {Policy} from '../DataModel/policy';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
users:User[] = [];
aUser:User = new User();
bUser:User = new User();
cUser:User = new User();
dUser:User = new User();
eUser:User = new User();

adependent:Dependent = new Dependent();
bdependent:Dependent = new Dependent();
cdependent:Dependent = new Dependent();
ddependent:Dependent = new Dependent();

edependent:Dependent = new Dependent();
fdependent:Dependent = new Dependent();
gdependent:Dependent = new Dependent();
hdependent:Dependent = new Dependent();


apolicy:Policy = new Policy();
bpolicy:Policy = new Policy();
cpolicy:Policy = new Policy();
dpolicy:Policy = new Policy();

  constructor() { }

  ngOnInit(){
    this.initPolicies();
  }

  public initPolicies(){
    this.apolicy.dependents = 4;
   this.apolicy.insurer ="LTI";
   this.apolicy.insured = "Milind Soman";
   this.apolicy.policyId =1;
   this.apolicy.policyName ="Group Policy";
   this.apolicy.policyType ="Employee Health";
   this.apolicy.startDate = new Date("1/1/2018");
   this.apolicy.endDate =  new Date("1/1/2019");
   this.apolicy.netPremium = 100;
   this.apolicy.grossPremium =150;
   this.apolicy.taxes = 12;
   this.apolicy.sumInsured = 4000;
   this.apolicy.status = "Enrolled";
   //this.apolicy.isAddBenefit1 = true;
   this.apolicy.isIncreasedSumInsured = true;
   //this.policies.push(this.apolicy);

   this.bpolicy.dependents = 4;
   this.bpolicy.insurer ="LTI";
   this.bpolicy.insured = " Brajesh Pandey";
   this.bpolicy.policyId =2;
   this.bpolicy.policyName ="Group Policy";
   this.bpolicy.policyType ="Employee Health";
   this.bpolicy.startDate = new Date("1/2/2018");
   this.bpolicy.endDate = new Date("1/2/2019");
   this.bpolicy.netPremium = 110;
   this.bpolicy.grossPremium =250;
   this.bpolicy.taxes = 15;
   this.bpolicy.sumInsured = 5000;
   this.bpolicy.isAddBenefit2 = true;
   this.bpolicy.status = "Enrolled";

   this.cpolicy.dependents = 2;
   this.cpolicy.insurer ="LTI";
   this.cpolicy.insured = " Gaurav Rana";
   this.cpolicy.policyId =3;
   this.cpolicy.policyName ="Group Policy";
   this.cpolicy.policyType ="Employee Health";
   this.cpolicy.startDate = new Date("1/2/2016");
   this.cpolicy.endDate = new Date("1/2/2022");
   this.cpolicy.netPremium = 310;
   this.cpolicy.grossPremium =350;
   this.cpolicy.taxes = 35;
   this.cpolicy.sumInsured = 35000;
   this.cpolicy.isRemoveExclusion = true;
   this.cpolicy.status = "Enrolled";

   this.dpolicy.dependents = 3;
   this.dpolicy.insurer ="LTI";
   this.dpolicy.insured = " Darshan Hardas";
   this.dpolicy.policyId =4;
   this.dpolicy.policyName ="Group Policy";
   this.dpolicy.policyType ="Employee Health";
   this.dpolicy.startDate = new Date("1/2/2017");
   this.dpolicy.endDate = new Date("1/2/2019");
   this.dpolicy.netPremium = 410;
   this.dpolicy.grossPremium =450;
   this.dpolicy.taxes = 45;
   this.dpolicy.sumInsured = 45000;
   this.dpolicy.isAddBenefit2 = true;
   this.dpolicy.status = "Enrollment Pending";
   //this.policies.push(this.bpolicy);
  }
  // public initPolicies(){
  //   this.apolicy.dependents = 4;
  //  this.apolicy.insurer ="LTI";
  //  this.apolicy.insured = "Milind Soman";
  //  this.apolicy.policyId =1;
  //  this.apolicy.policyName ="Group Policy";
  //  this.apolicy.policyType ="Employee Health";
  //  this.apolicy.startDate ="1/1/2018";
  //  this.apolicy.endDate = "1/1/2019";
  //  this.apolicy.netPremium = 100;
  //  this.apolicy.grossPremium =150;
  //  this.apolicy.taxes = 12;


  //  this.bpolicy.dependents = 4;
  //  this.bpolicy.insurer ="LTI";
  //  this.bpolicy.insured = " Brajesh Pandey";
  //  this.bpolicy.policyId =2;
  //  this.bpolicy.policyName ="Group Policy";
  //  this.bpolicy.policyType ="Employee Health";
  //  this.bpolicy.startDate ="1/2/2018";
  //  this.bpolicy.endDate = "1/2/2019";
  //  this.bpolicy.netPremium = 110;
  //  this.bpolicy.grossPremium =250;
  //  this.bpolicy.taxes = 15;
  // }

  public initUsers(){
    this.users.length = 0;
    this.initPolicies();
    this.adependent.age = 30;
    this.adependent.cardNumber = "XX-XXXX-01";
    this.adependent.dob = new Date('10/11/1988');
    this.adependent.gender = "M";
    this.adependent.id = 1;
    this.adependent.name = "Pankaj Motewar";
    this.adependent.relation ="Friend";
    this.adependent.status = "Approved";
    
  
    this.bdependent.age = 28;
    this.bdependent.cardNumber = "XX-XXXX-02";
    this.bdependent.dob =new Date("10/12/1990");
    this.bdependent.gender = "M";
    this.bdependent.id = 2;
    this.bdependent.name = "Omkar Deshpande";
    this.bdependent.relation ="Friend";
    this.bdependent.status = "Approved";
    
  
    this.cdependent.age = 31;
    this.cdependent.cardNumber = "XX-XXXX-03";
    this.cdependent.dob = new Date("10/11/1989");
    this.cdependent.gender = "M";
    this.cdependent.id = 3;
    this.cdependent.name = "Ganesh Gude";
    this.cdependent.relation ="Friend";
    this.cdependent.status = "Approved";
  
    this.ddependent.age = 25;
    this.ddependent.cardNumber = "XX-XXXX-04";
    this.ddependent.dob = new Date("10/12/1992");
    this.ddependent.gender = "F";
    this.ddependent.id = 4;
    this.ddependent.name = "Priyanka Vaishnav";
    this.ddependent.relation ="Friend";
    this.ddependent.status = "Approved";
    
  
    this.edependent.age = 30;
    this.edependent.cardNumber = "XX-XXXX-05";
    this.edependent.dob = new Date("10/12/1988");
    this.edependent.gender = "F";
    this.edependent.id = 5;
    this.edependent.name = "Yogini Alhat";
    this.edependent.relation ="Friend";
    this.edependent.status ="Approved";
  
    this.fdependent.age = 33;
    this.fdependent.cardNumber = "XX-XXXX-06";
    this.fdependent.dob = new Date("10/12/1985");
    this.fdependent.gender = "M";
    this.fdependent.id = 6;
    this.fdependent.name = "Anand Lokhande";
    this.fdependent.relation ="Friend";
    this.fdependent.status ="Approved";
  
    this.gdependent.age = 26;
    this.gdependent.cardNumber = "XX-XXXX-07";
    this.gdependent.dob = new Date("10/12/1994");
    this.gdependent.gender = "M";
    this.gdependent.id = 7;
    this.gdependent.name = "Ankur Agarwal";
    this.gdependent.relation ="Friend";
    this.gdependent.status = "Approved";
  
  
    this.hdependent.age = 35;
    this.hdependent.cardNumber = "XX-XXXX-08";
    this.hdependent.dob = new Date("10/12/1983");
    this.hdependent.gender = "M";
    this.hdependent.id = 8;
    this.hdependent.name = "Sunil Shinde";
    this.hdependent.relation ="Friend";
    this.hdependent.status = "Approved";

    this.aUser.firstName = "Milind";
    this.aUser.lastName = "Soman";
    this.aUser.Id = 1;
    this.aUser.employeeType = "Employee";
    this.aUser.email = "Milind.Soman@lntinfotech.com";
    this.aUser.password = "Milind123";
    this.aUser.primaryCardNumber = "1234567";
    this.aUser.policies.push(1);
    this.aUser.allPolicies.length = 0;
    this.aUser.dependents.length =0;
    this.aUser.allPolicies.push(this.apolicy);
    this.aUser.dependents.push(this.adependent);
    this.aUser.dependents.push(this.bdependent);
    //this.aUser.dependents.push(this.cdependent);
    //this.aUser.dependents.push(this.ddependent);
    this.users.push(this.aUser);
    
    this.bUser.firstName = "Brajesh";
    this.bUser.lastName = "Pandey";
    this.bUser.Id = 2;
    this.bUser.employeeType = "Employee";
    this.bUser.email = "Brajesh.Pandey@lntinfotech.com";
    this.bUser.password = "Brajesh123";
    this.bUser.primaryCardNumber = "7654321";
    this.bUser.allPolicies.length =0
    this.bUser.dependents.length = 0;
    this.bUser.allPolicies.push(this.bpolicy);
    this.bUser.policies.push(2);
    this.bUser.dependents.push(this.edependent);
    this.bUser.dependents.push(this.fdependent);
    this.bUser.dependents.push(this.gdependent);
    this.bUser.dependents.push(this.hdependent);
    this.users.push(this.bUser);
    
    
    this.cUser.firstName = "Gaurav";
    this.cUser.lastName = "Rana";
    this.cUser.Id = 3;
    this.cUser.employeeType = "Employee";
    this.cUser.email = "Gaurav.Rana@lntinfotech.com";
    this.cUser.password = "Gaurav123";
    this.cUser.primaryCardNumber = "3456789"
    this.cUser.policies.push(3);
    this.cUser.allPolicies.push(this.cpolicy);
    this.users.push(this.cUser);
    
    this.dUser.firstName = "Darshan";
    this.dUser.lastName = "Hardas";
    this.dUser.Id = 4;
    this.dUser.employeeType = "Employee";
    this.dUser.email = "Darshan.Hardas@lntinfotech.com";
    this.dUser.password = "Darshan123";
    this.dUser.primaryCardNumber = "9876543";
    this.dUser.policies.push(4);
    this.dUser.allPolicies.push(this.dpolicy);
    this.users.push(this.dUser);

    this.eUser.firstName = "Satya";
    this.eUser.lastName = "Kadam";
    this.eUser.Id = 5;
    this.eUser.employeeType = "HR";
    this.eUser.email = "Satya.Kadam@lntinfotech.com";
    this.eUser.password = "Satya123";
    this.users.push(this.eUser);
  }

  public login(user:User):User{
   if(this.users.filter(u=>u.email == user.email && u.password == user.password).length > 0){
   return this.users.filter(u=>u.email == user.email && u.password == user.password)[0];
   }
   else{
   return null;
   }
  }

   public getDependentsForUser(userId:Number):Dependent[]
   {
    let user = this.users.filter(u=>u.Id== userId)[0];
    if(user != null){
      if(user.dependents != null && user.dependents.length > 0){
        return user.dependents;
      }
    }
     return [];
   }

   public getUsers():User[]
   {
     //this.initUsers();
      return this.users;
   }

  }


  

