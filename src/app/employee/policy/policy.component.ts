import { Component, OnInit,Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Policy} from '../../DataModel/policy';
@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
@Input() policyId:number;
policy:Policy = new Policy();

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    if(true){
    this.policy =  this._employeeService.getPolicyFromId(this.policyId);
  }

}
}
