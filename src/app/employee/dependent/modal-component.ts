import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Dependent } from '../../DataModel/dependent';
import { MessageService } from '../../message.service';
import { FormControl, FormGroup,FormsModule,FormBuilder } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
//import { isNumber, toInteger, padNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-content.html',
 
})
export class NgbdModalContent implements AfterViewInit {
  bsConfig: Partial<BsDatepickerConfig>;
  @Input() dep: Dependent;
  @Input() isEdit: boolean;
  constructor(public activeModal: NgbActiveModal, private msgService: MessageService) { }

  ngAfterViewInit() {
   this.bsConfig =  Object.assign({}, { containerClass: 'theme-default' });
  }
  select(model){  
    console.log(model);
  }
  

  save(dependent: Dependent,isEdit:Boolean) {
    let dob = dependent.dob;
    //dependent.dob = new Date (dob["day"] + '/'+ dob["month"]+'/'+dob["year"]);
    //dependent.dob = new Date (dob["year"] + '-'+ dob["month"]+'-'+dob["day"]);
    if(!isEdit){
      dependent.cardNumber = "XXX-XXX-09";
      dependent.status = "To Be Approved";
      this.msgService.post(dependent);
    }
    this.activeModal.close();
    // dependent.cardNumber = "XXX-XXX-09";
    // dependent.status = "To Be Approved";
    // dependents.push(dependent);
    // this.activeModal.close();
    // console.log("save in modal");
    // this.saveClick.emit(dependent);
  }

}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html'
})
export class NgbdModalComponent {
  @Input() dependent: any;
  @Input() isEdit: boolean;
  @Input() dependents: any;
  memberForm:FormGroup;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    
    if (this.isEdit) {
      // let dob =  {year: this.dependent.dob.getFullYear(), month: this.dependent.dob.getMonth(), day: this.dependent.dob.getDay()};
      // this.dependent.dob = dob;
      // var datepipe = new DatePipe('en-US');
      // this.dependent.dob = datepipe.transform(this.dependent.dob, 'yyyy-mm-dd');
      modalRef.componentInstance.dep = this.dependent;
      //this.memberForm.controls["depDOB"].setValue(new Date(this.dependent.dob));
    
    }
    else {
      modalRef.componentInstance.dep = new Dependent();
    }
    modalRef.componentInstance.isEdit = this.isEdit;
    modalRef.componentInstance.dependents = this.dependents;
  }

  
}


// export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
//   parse(value: string): NgbDateStruct {
//     if (value) {
//       const dateParts = value.trim().split('/');
//       if (dateParts.length === 1 && parseInt(dateParts[0])) {
//         return {day: parseInt(dateParts[0]), month: null, year: null};
//       } else if (dateParts.length === 2 && parseInt(dateParts[0]) && parseInt(dateParts[1])) {
//         return {day: parseInt(dateParts[0]), month: parseInt(dateParts[1]), year: null};
//       } else if (dateParts.length === 3 && parseInt(dateParts[0]) && parseInt(dateParts[1]) && parseInt(dateParts[2])) {
//         return {day: parseInt(dateParts[0]), month: parseInt(dateParts[1]), year: parseInt(dateParts[2])};
//       }
//     }
//     return null;
//   }
 
//   format(date: NgbDateStruct): string {
//     // return date ?
//     //     `${parseInt(date.day) ? padNumber(date.day) : ''}/${isNumber(date.month) ? padNumber(date.month) : ''}/${date.year}` :
//     //     '';
//     return date.day.toString() + "/" + date.month.toString() + "/" + date.year.toString();
//   }
// }