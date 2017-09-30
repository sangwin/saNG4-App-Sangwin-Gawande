// Created By : Sangwin Gawande (http://sangw.in)

import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes ,Router} from '@angular/router';
import { ValidationService } from '../config.service';
import { UserService } from '../user.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private loginForm : FormGroup;
	constructor(private formBuilder: FormBuilder,private router: Router, private userService:UserService) { 
		this.loginForm = this.formBuilder.group({
			email: ['',  [Validators.required, ValidationService.emailValidator]],
			password: ['',[Validators.required, ValidationService.passwordValidator]]
		});
	}

	ngOnInit() {
	}

	doLogin(){
		let login = this.userService.doLogin(this.loginForm.value);
		login.subscribe(data => this.success(data));	
	}

	success(data){
		// let data = JSON.parse(dataz);
		if (data.code == 200) {
			localStorage.setItem('userData', JSON.stringify(data.userData));
			this.router.navigate(['/']);
			alert(data.message);
		}else{
			alert("Invalid Credentials");
		}
	}

}

// Created By : Sangwin Gawande (http://sangw.in)