import { Component } from '@angular/core';
import { User } from '../models/user';
import { EnrollmentService } from '../service/enrollment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private _enrollmentService:EnrollmentService) { }
  submitted=false;
  topicError = true;
  errorMessage='';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('', '', 0, 'default', '', true);
  topicValidate(value:string){
     if(value === 'default'){
       this.topicError = true;
     }else{
       this.topicError = false;
     }
  }
  onSubmit(){
    this.submitted = true;
     console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe(
       data => console.log('Success!', data),
       error => this.errorMessage = error.statusText
    )
  }
}
