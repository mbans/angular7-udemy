import { PasswordValidators } from './password-validators';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.css']
})
export class NewCourseFormComponentComponent {

  //Declare 
  form : FormGroup;

  constructor(fb: FormBuilder) {
    //Can use a FormBuilder to construct the form
    //We explicitly build our form in the code to match that in the HTML and then we use 
    //directives to bind
    // this.form = new FormGroup({
    //   oldPassword: new FormControl('', Validators.required, PasswordValidators.validOldPassword),
    //   newPassword: new FormControl('', Validators.required),
    //   confirmPassword: new FormControl('', Validators.required)
    // })

    this.form = fb.group({
        oldPassword: ['',Validators.required, PasswordValidators.validOldPassword],
        newPassword: ['',Validators.required],
        confirmPassword: ['',Validators.required]
    }, 
    
    //2nd arguement for form is validators
    {validator:PasswordValidators.passwordsShouldMatch});
  }

  log(control) {
    console.log(control);
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }


}
