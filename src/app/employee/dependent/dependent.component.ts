import { Component, OnInit, Input, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { Form } from '@angular/forms';
import { Dependent } from '../../DataModel/dependent';
import { LoginService } from '../../login/login.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './modal-component';
import { MessageService } from '../../message.service';


@Component({
  selector: 'app-dependent',
  templateUrl: './dependent.component.html',
  styleUrls: ['./dependent.component.css']

})

export class DependentComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() userId: number;
  
  dependent: Dependent;
  newDependent: Dependent;
  dependents: Dependent[] = [];
  closeResult: string;
  //@ViewChild(NgbdModalContent) modal: NgbdModalContent;
  constructor(private _loginService: LoginService, private modalService: NgbModal,
    private msgService: MessageService) {

  }
  
  ngAfterViewInit() {
    // this.modal.saveClick.subscribe((r) => {
    //    alert("hi"); });
  }
  ngOnChanges() {
    // this.modal.saveClick.subscribe((r) => {
    //   alert("hi"); });
  }


  ngOnInit() {
    this.msgService.currentMsg$.subscribe(data => {
      if (data) {
        console.log(data);
        if(this.dependents.indexOf(data) == -1){
        this.dependents.push(data);
        }
      }
    })
    this.newDependent = new Dependent();
    let userId = Number(this.userId);
    this.dependents = this._loginService.getDependentsForUser(userId);
  }

  saveDependent($event: any) {
    console.log("save in dependent");
    alert("Save Dependent");
  }


  deleteDependent(dependent:Dependent){
    let index = this.dependents.indexOf(dependent);
    this.dependents.splice(index,1);
   // alert("Delete");
  }
  //   open(content,dependent:Dependent) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) =>
  //    {
  //      this.dependent = dependent;
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });

  // }

  // close(){
  //   this.modalService.dismissAll();
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

}
