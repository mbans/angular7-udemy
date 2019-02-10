import { AbstractControl } from "@angular/forms";

export class PasswordValidators {

    static validOldPassword(control: AbstractControl) {
        console.log("In validOldPassword aynch validator....")
        return new Promise((resolve) =>{
            if(control.value !== '1234')
                resolve({inValidOldPassword : true});
            else 
                resolve(null);
        });
    }

    //Need to apply to th FormGroup as require access to the old and new FormControls
    static passwordsShouldMatch(control: AbstractControl) {
        console.log("in passwords should match")
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        console.log("new=" + newPassword.value + " old="+confirmPassword.value);

        if(newPassword.value !== confirmPassword.value) {
            return {passwordsShouldMatch : true};
        }
        else {
            return null;
        }
    }

}