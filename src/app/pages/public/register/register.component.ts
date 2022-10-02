import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/security/auth.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastMessage: ToastMessageService) {
    this.registerForm = formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required, Validators.minLength(8)]],
      username: [null, [Validators.required, Validators.minLength(8)]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['']);
  }

  register() {
    if(this.registerForm.valid) {
      const data: Register = this.registerForm.getRawValue();
      this.authService.register(data);
    } else {
      this.toastMessage.addSingle("error", "Erro", "Preencha todos os campos obrigatorios.");
    }
  }

}
