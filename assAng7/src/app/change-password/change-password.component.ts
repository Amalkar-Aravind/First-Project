import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';
import { PasswordValidators } from './password.validators';


@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form: FormGroup;
  constructor(fb:FormBuilder) {
    this.form=fb.group({
      oldpassword:['',
      Validators.required,
      PasswordValidators.validOldPassword
    ],
      newpassword:['',
      Validators.required
    ],
      confirmpassword:['',
      Validators.required
    ]
    },{
      validator:PasswordValidators.passwordShouldMatch
    });
   }
   get oldPassword(){return this.form.get('oldpassword')}
   get newPassword(){return this.form.get('newpassword')}
   get confirmPassword(){return this.form.get('confirmpassword')}

}
