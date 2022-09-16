import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  faPen = faPen;

  urlPhoto?: string;

  userForm: FormGroup;

  constructor(formBuilder: FormBuilder,
    private userService: UserService) {
    this.userForm = formBuilder.group({
      id: [{value: null, disabled: true}, [Validators.required]],
      name: [{value: null, disabled: true}, [Validators.required]],
      password: [{value: null, disabled: true}, [Validators.required]],
      email: [{value: null, disabled: true}, [Validators.required]],
    });
  }

  ngOnInit(): void {
    const email = localStorage.getItem("user_email");
    if (email) {
      this.userService.findUserByEmail(email).subscribe(it => {
        this.urlPhoto = it.urlPhoto;
        this.userForm.controls['id'].setValue(it.id);
        this.userForm.controls['name'].setValue(it.name);
        this.userForm.controls['password'].setValue(it.password);
        this.userForm.controls['email'].setValue(it.email);
      });
    }
  }

  uploadAvatar(event: any) {
    this.userService.uploadLogo(event.files[0]).subscribe(it => {
      this.urlPhoto = it.urlPhoto;
      localStorage.setItem("urlPhoto", it.urlPhoto);
    });
  }

  enableInput(input: string) {
    this.userForm.get(input)?.enable();
    if (input === "password") {
      this.userForm.get(input)?.setValue('');
    }
  }

  salvar() {
    if(this.userForm.valid) {
      let user = this.userForm.getRawValue();
      this.userService.updateUser(user['id'], user['password'], user['email'] ,user['name']).subscribe(it => {
        this.userForm.controls['name'].setValue(it.name);
        this.userForm.controls['password'].setValue(it.password);
        this.userForm.controls['email'].setValue(it.email);
      });
    }
  }

}
