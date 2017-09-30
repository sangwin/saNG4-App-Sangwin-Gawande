// Created By : Sangwin Gawande (http://sangw.in)


import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { ValidationService } from '../config.service';
import { UserService } from '../user.service';
import {AutoCompleteModule} from 'primeng/primeng';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
	private productForm : FormGroup;
	index;
	isPassword;  
	text: string;
    
    results: string[];

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


    search(event) {
        // this.mylookupservice.getResults(event.query).then(data => {
        //     this.results = data;
        // });
    }
    
	addProduct(){
		if (this.index && this.index != null && this.index != undefined) {
			console.log(this.index);
			this.productForm.value.id = this.index
		}
		let login = this.userService.doRegister(this.productForm.value);
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
			this.productForm = this.formBuilder.group({
				name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
				price: ['',  [Validators.required,ValidationService.checkLimit(100,1000)]],
				quantity: ['',  [Validators.required,ValidationService.checkLimit(100,1000)]]
			});
		}else{
			this.productForm = this.formBuilder.group({
				name: [data.userData.name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
				price: [data.userData.price,  [Validators.required,ValidationService.checkLimit(100,1000)]],
				quantity: ['',  [Validators.required,ValidationService.checkLimit(100,1000)]]
			});
		}
	}

}


// Created By : Sangwin Gawande (http://sangw.in)