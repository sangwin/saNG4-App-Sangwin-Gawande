/**
 * This component is used to add/edit user details
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { ValidationService } from '../config.service';
import { UserService } from '../user.service';

@Component({
	selector: 'app-user-add-update',
	templateUrl: './user-add-update.component.html',
	styleUrls: ['./user-add-update.component.css']
})

export class UserAddUpdateComponent implements OnInit {
	private registerForm : FormGroup;
	index;
	isPassword;
	constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private userService:UserService) { 

		this.route.params.subscribe(params => {
			this.index = params['id'];
			if (this.index && this.index != null && this.index != undefined) {
				console.log(this.index);
				this.isPassword = false;
				this.getUserDetails(this.index);
			}else{
				this.isPassword = true;
				this.createForm(null);
			}
		});
	}

	ngOnInit() {
	}


	doRegister(){
		if (this.index && this.index != null && this.index != undefined) {
			console.log(this.index);
			this.registerForm.value.id = this.index
		}
		let login = this.userService.doRegister(this.registerForm.value);
		login.subscribe(data => this.success(data));	
	}

	success(data){
		// let data = JSON.parse(dataz);
		if (data.code == 200) {
			let userData = JSON.parse(localStorage.getItem('userData'));
			if (userData == undefined || userData.email == data.userData.email) {
				localStorage.setItem('userData', JSON.stringify(data.userData));
			}
			this.router.navigate(['/']);
			alert(data.message);
		}else{
			alert("Invalid Credentials");
		}
	}

	getUserDetails(index){
		let indexData = {'id':index};
		let userDelete = this.userService.getUserDetails(indexData);
		userDelete.subscribe(data => this.createForm(data));		
	}

	createForm(data){
		if (data == null) {
			this.registerForm = this.formBuilder.group({
				firstname: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
				lastname: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
				phone: ['',  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
				email: ['',  [Validators.required, ValidationService.emailValidator]],
				password: ['',[Validators.required, ValidationService.passwordValidator]]
			});			
		}else{
			this.registerForm = this.formBuilder.group({
				firstname: [data.userData.firstname,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
				lastname: [data.userData.lastname,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
				phone: [data.userData.phone,  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
				email: [data.userData.email,  [Validators.required, ValidationService.emailValidator]],
				password: [{value: '', disabled: true}]
			});
		}
	}

}

/**
 * This component is used to add/edit user details
 * Created By : Sangwin Gawande (http://sangw.in)
 */