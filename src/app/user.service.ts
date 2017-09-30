// Created By : Sangwin Gawande (http://sangw.in)

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

	constructor(private http: HttpClient) { }

	doLogin(data){
		return this.http.post('http://localhost/saNG4-Demo-App/login.php',data);	
	}

	doRegister(data){
		return this.http.post('http://localhost/saNG4-Demo-App/register.php',data);	
	}

	getUserList(){
		return this.http.get('http://localhost/saNG4-Demo-App/userList.php');	
	}

	deleteUser(deleteData){
		return this.http.post('http://localhost/saNG4-Demo-App/deleteUser.php',deleteData);	
	}	

	getUserDetails(userData){
		return this.http.post('http://localhost/saNG4-Demo-App/userDetails.php',userData);	
	}
}

// Created By : Sangwin Gawande (http://sangw.in)