import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;

  constructor(formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private toastMessage: ToastMessageService) {
    this.forgotForm = formBuilder.group({
      email: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['/login']);
  }

  forgot() {
    if (this.forgotForm.valid) {
      const forgot = this.forgotForm.getRawValue();
      this.authService.forgotPassword(forgot.email).subscribe(it => {
        this.router.navigate(['/login']);
        this.toastMessage.addSingle("success", "Sucesso", "Email enviado.");
      });
    }
  }

}
