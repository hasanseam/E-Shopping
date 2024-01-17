import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService,User } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
     email = new FormControl('', [Validators.required, Validators.email]);
     firstName = new FormControl('',Validators.required);
     lastName= new FormControl('',Validators.required);
     password = new FormControl('',Validators.required);
     hide = true;
     constructor(private userService:UserService){

     }
     
     getErrorMessage(){
            //ToDo show error message for mail
     }

     onRegister(){
      const user:User={
        firstname: this.firstName.value||'',
        lastname: this.lastName.value||'',
        email: this.email.value||'',
        password: this.password.value||''
      };

      const obs = this.userService.registerUser(user);
      obs.subscribe({
        next:(data)=>{console.log(data); this.resetForm()},
        error:(error)=>{console.log(error)}
      });
     }
     // form reset after succesful registration
     resetForm(){
      this.firstName.reset();
      this.lastName.reset();
      this.email.reset();
      this.password.reset();
    }
}
