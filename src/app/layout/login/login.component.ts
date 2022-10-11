import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, delay, take, tap } from 'rxjs';
import { AccountInterface } from 'src/app/shared/Interfaces/account-interface';
import { AuthLoginService } from 'src/app/shared/services/auth-login/auth-login.service';
import { MyAccountService } from 'src/app/shared/services/my-account/my-account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin!: FormGroup
  errorMessage = {msg: '', color: 'danger'}
  loggingProcess: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private authLogin: AuthLoginService,
    private myAccount: MyAccountService,
    ) { }

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }

  submitForm(){
    this.setErrorAlert('', '')
    if (this.formularioLogin.valid && this.loggingProcess == false) {
      this.loggingProcess = true
      var account: AccountInterface = this.formularioLogin.value
      this.authLogin.authLogin(account)
      .pipe(
        delay(2000),
          catchError(async (err) => this.setErrorAlert(err.error.erro, 'danger')),
          take(1)
      ).subscribe(next =>
        {
          console.log(next);
          this.loggingProcess = false
        }
      )
    } else if (this.formularioLogin.invalid && this.loggingProcess == true){
      console.log(this.formularioLogin.controls)
      this.setErrorAlert('Campos inválidos!', 'warning')
    } else if (this.formularioLogin.invalid && this.loggingProcess == false){
      this.formularioLogin.markAllAsTouched()
      this.setErrorAlert('Campos Incompletos!', 'warning')
    }
  }

  inputVal(name: string) {
    return this.formularioLogin.get(name)
  }

  hasError(input: string){
    if (this.inputVal(input)!.touched && this.inputVal(input)!.invalid) {
      return true
    }
    return false
  }

  setErrorAlert(msg: string, color: string){
    this.errorMessage = {msg: msg, color: color}
    setInterval(()=>{this.errorMessage = {msg: '', color: color}}, 4000)
  }

}
