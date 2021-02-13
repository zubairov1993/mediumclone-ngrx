import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { registerAction } from "../../store/actions/register.action";

@Component({
  selector: 'mc-register',
  templateUrl: './redister.component.html',
  styleUrls: ['./redister.component.scss']
})
export class RegistorComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }
  
  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ''
    })
  }

  onSubmit(): void {
    console.log(this.form.valid);
    this.store.dispatch(registerAction(this.form.value))
  }
}

