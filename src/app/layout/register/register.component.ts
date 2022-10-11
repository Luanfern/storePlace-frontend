import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Obj } from '@popperjs/core';
import { catchError, delay, map, pipe, take, tap, VirtualTimeScheduler } from 'rxjs';
import { AccountInterface } from 'src/app/shared/Interfaces/account-interface';
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
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.formularioRegister = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email, this.validEmail2], /**[this.verificarEmail.bind(this)] */],
      password: [null, [Validators.required]],
      telefone: [null, [Validators.required, Validators.minLength(10)]],
    })

    /**
     * 
     *   this.inputVal('email')?.valueChanges.subscribe(
        v => {
          console.log(v.match(/\.['c']['o']['m']/g))
          if (this.inputVal('email')?.valid && v.match(/\.['c']['o']['m']/g)) {
            this.registerService.verifyEmail(v)
              .pipe(
                take(1),
                catchError(async (e) => console.log(e))
              ).subscribe(
                next => {
                  var obj: {status: boolean} = next as any
                  console.log(next)
                  this.verifyEmailStatus = !obj.status
                }
              )
          }
        }
      )
     */
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
    .pipe(map(v => v ? null : { freeEmail: true })).subscribe(
      next => {
        console.log(next?.freeEmail)
        console.log(campo)
        return next ? null : { freeEmail: true }
      }
    );
  }

  submitForm() {
    this.setErrorAlert('', '')
    if (this.formularioRegister.valid && this.registerProcess == false) {
      this.registerProcess = true
      var account: AccountInterface = this.formularioRegister.value
      this.registerService.register(account)
      .pipe(
        delay(2000),
          catchError(async (err) => this.setErrorAlert(err.error.erro, 'danger')),
          take(1)
      ).subscribe(next =>
        {
          console.log(next);
          this.registerProcess = false
        }
      )
    } else if (this.formularioRegister.invalid && this.registerProcess == true){
      this.setErrorAlert('Campos inválidos!', 'warning')
    } else if (this.formularioRegister.invalid && this.registerProcess == false){
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
