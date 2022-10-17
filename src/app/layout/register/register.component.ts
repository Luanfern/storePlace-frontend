import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Obj } from '@popperjs/core';
import { catchError, delay, map, pipe, switchMap, take, tap, VirtualTimeScheduler } from 'rxjs';
import { AccountInterface } from 'src/app/shared/Interfaces/account-interface';
import { AuthLoginService } from 'src/app/shared/services/auth-login/auth-login.service';
import { MyAccountService } from 'src/app/shared/services/my-account/my-account.service';
import { RegisterService } from 'src/app/shared/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formularioRegister!: FormGroup;
  errorMessage = { msg: '', color: 'danger' }
  registerProcess: boolean = false
  si: any

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private myAccount: MyAccountService,
    private route: Router,
    private authLogin: AuthLoginService
  ) { }

  ngOnInit(): void {
    this.formularioRegister = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email, this.validEmail2], [this.verificarEmail.bind(this)]],
      password: [null, [Validators.required]],
      telefone: [null, [Validators.required, Validators.minLength(10)]],
    })
  }

  validEmail2(campo: FormControl) {
    if (campo.root || (<FormGroup>campo.root).controls) {
      let regex = new RegExp(/\.['c']['o']['m']/g, "i");
      if (regex.exec((campo.value as string))) {
        return null
      }
      return { invalidEmail2: true }
    }
    return null
  }

  async verificarEmail(campo: FormControl) {
    return this.registerService.verifyEmail(campo.value)
      .pipe(
        map(v => v ? null : { freeEmail: true }),
        tap(v => {
          console.log(campo)
        })
        ).subscribe();
  }

  submitForm() {
    this.setErrorAlert('', '')
    if (this.formularioRegister.valid && this.registerProcess == false) {
      this.registerProcess = true
      var account: AccountInterface = this.formularioRegister.value
      this.registerService.register(account)
        .pipe(
          catchError(async (err) => {
            this.setErrorAlert(err.error.erro, 'danger')
            this.registerProcess = false
          }),
          take(1),
          map((next: any) => next.token),
          tap(async (tk) => {
            await this.myAccount.setTokenOnLocalStorage(tk)
          }),
          switchMap((token) => this.authLogin.authValidate()),
          catchError(async (err) => {
            this.setErrorAlert(err.error.erro, 'danger'),
              this.registerProcess = false
          }),
        ).subscribe((acc: any) => {
          this.registerProcess = false
          console.log(acc.acc)
          if (acc.status) {
            this.myAccount.setIslogged()
            this.myAccount.setCurrentAccount(acc.acc)
            this.route.navigate(['home'])
          }
        }
        )
    } else if (this.formularioRegister.invalid && this.registerProcess == true) {
      this.setErrorAlert('Campos inválidos!', 'warning')
    } else if (this.formularioRegister.invalid && this.registerProcess == false) {
      this.formularioRegister.markAllAsTouched()
      this.setErrorAlert('Campos Incompletos!', 'warning')
    }
  }

  inputVal(name: string) {
    return this.formularioRegister.get(name)
  }

  hasError(input: string) {
    if (this.inputVal(input)!.touched && this.inputVal(input)!.invalid) {
      return true
    }
    return false
  }

  setErrorAlert(msg: string, color: string) {
    this.errorMessage = { msg: msg, color: color }
    clearInterval(this.si)
    this.si = setInterval(() => { this.errorMessage = { msg: '', color: color } }, 4000)
  }
}
