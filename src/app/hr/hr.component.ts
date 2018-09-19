import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoginService  } from '../login/login.service';
import { User } from '../DataModel/user';
import { UserPolicy } from '../DataModel/userpolicy';
import { EmployeeTopup } from '../DataModel/employeeTopup';
import { Policy } from '../DataModel/policy';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})

export class HrComponent implements OnInit {
  userId:number;
  usrName:string="";
  allUsers:User[]=[];
  userPolicies:UserPolicy[]=[];
  employeeTopups:EmployeeTopup[]=[];

  constructor(private _loginService:LoginService,
    private activatedRoute:ActivatedRoute,
  private router:Router) {

   }

  //  setLang(lang: string) {
  //   this.translate.use(lang);
  // }

   static getTopPlans(policy:Policy):string[]{
    
    let plans:string[]=[];
    if(policy.isAddBenefit1){
      plans.push("Add Benefit 1");
    }else if(policy.isAddBenefit2){
      plans.push("Add Benefit 2");
    }else if(policy.isAddMaternityBenefit){
      plans.push("Add Maternity Benefit");
    }else if(policy.isIncreasedSumInsured){
      plans.push("Increase Sum Insured");
    }else if(policy.isOther){
      plans.push("Others");
    }else if(policy.isRemoveExclusion){
      plans.push("Remove Exclusions");
    }
     return plans;
   }

   logOut(){
    this.router.navigate(['']);
  }

  ngOnInit() {
    let loggedInUser = new User();
    this.userId = this.activatedRoute.snapshot.params.userid;
    this.userPolicies.length = 0;
    this.allUsers = this._loginService.getUsers();
    loggedInUser = this.allUsers.filter(u=>u.Id == this.userId)[0];
    this.usrName = loggedInUser.firstName + " " + loggedInUser.lastName;

    //logic for fetching user policies
    if(this.allUsers != null || this.allUsers != undefined){
     if(this.allUsers.length > 0) {
      let tmpUsrPolicies:UserPolicy[]=[];
      tmpUsrPolicies.length = 0;
       this.allUsers.forEach(function(u){
        if(u.employeeType != 'HR'){
          let usrPol = new UserPolicy();
          usrPol.EmployeeId = u.Id;
          usrPol.EmployeeName = u.firstName + " " + u.lastName;
          usrPol.sumInsured = u.allPolicies[0].sumInsured;
          usrPol.NoOfDependents = u.allPolicies[0].dependents;
          usrPol.status = u.allPolicies[0].status;
          usrPol.primaryCardNumber = u.primaryCardNumber;
          usrPol.startDate = u.allPolicies[0].startDate;
          usrPol.endDate = u.allPolicies[0].endDate;
          tmpUsrPolicies.push(usrPol);

        }
       })
       this.userPolicies = tmpUsrPolicies;

       //Logic for topup plans
       this.employeeTopups = [];
       let tmpempTopups:EmployeeTopup[]=[];
       tmpempTopups.length =0;
       this.allUsers.forEach(function(u){
        if(u.employeeType != 'HR'){
          
          u.dependents.forEach(function(d){
            let empTopup = new EmployeeTopup();
            empTopup.employeeId = u.Id;
            empTopup.employeeName = u.firstName + " " + u.lastName;
            empTopup.memberName = d.name;
            empTopup.relation = d.relation;
            empTopup.dob = d.dob;
            empTopup.age = d.age;
            empTopup.endDate = u.allPolicies[0].endDate;
            empTopup.topupPlans = HrComponent.getTopPlans(u.allPolicies[0]);
            tmpempTopups.push(empTopup);
            //empTopup.topupPlan = u.allPolicies[0].isAddBenefit1?"Add Benefit 1":"";
          })
        }
       })
       this.employeeTopups = tmpempTopups;
     }
    }
  }

}
