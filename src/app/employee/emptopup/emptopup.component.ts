import { Component, OnInit,Input } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Dependent } from '../../DataModel/dependent';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-emptopup',
  templateUrl: './emptopup.component.html',
  styleUrls: ['./emptopup.component.css']
})
export class EmptopupComponent implements OnInit {
  @Input() userId: number;

  dependent: Dependent;
  newDependent: Dependent;
  dependents: Dependent[] = [];

  isAddonAdded:boolean = false;
  constructor(private _loginService: LoginService,
    private msgService: MessageService) { }

  ngOnInit() {

    this.newDependent = new Dependent();
    let userId = Number(this.userId);
    this.dependents = this._loginService.getDependentsForUser(userId);
  }

  confirm(){
    this.isAddonAdded = true;
  }

  close(){
    this.isAddonAdded = false;
  }


}
