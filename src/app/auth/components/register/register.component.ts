import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service/auth.service";
import { registerAction } from "../../store/actions/register.action";
import { isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";
import { BackendErrorsInterface } from "../../../shared/types/backendErrors.interface";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";

@Component({
  selector: 'mc-register',
  templateUrl: './redister.component.html',
  styleUrls: ['./redister.component.scss']
})
export class RegistorComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ''
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({request}))
  }
}

