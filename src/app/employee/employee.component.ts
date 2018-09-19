import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Policy } from '../DataModel/policy';
import { User } from '../DataModel/user';
import {EmployeeService} from './employee.service';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
policy:Policy = new Policy();
policyId:number;
userId:number;
allUsers:User[]=[];
isAddonAdded:boolean=false;
usrName:string ="";
usrRoleType:string="";

  constructor(private activatedRoute:ActivatedRoute,
  private _employeeService:EmployeeService,
  private _loginService:LoginService,
  private router:Router) {
   }

  ngOnInit() {
    this._employeeService.initPolicies();
    this._employeeService.initDependents();
    this.policyId= this.activatedRoute.snapshot.params.policyid;
    this.userId = this.activatedRoute.snapshot.params.userid;
    
    //Logic to fetch the policy
    this.allUsers = this._loginService.getUsers();
    let loggedInUser = new User();
    loggedInUser = this.allUsers.filter(u=> u.Id == this.userId)[0];
    this.usrName = loggedInUser.firstName + " " + loggedInUser.lastName;
    this.usrRoleType = loggedInUser.employeeType;
    this.policy = loggedInUser.allPolicies[0];
    //this.policy = this._employeeService.getPolicyFromId(this.policyId);
  }

  logOut(){
    this.router.navigate(['']);
  }

  addAddon(){
    this.isAddonAdded = true;
  }

  close(){
    this.isAddonAdded = false;
  }

}
