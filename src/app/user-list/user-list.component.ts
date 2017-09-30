import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	userList;
	userListData;
	color = 'white';
	constructor(private userService:UserService) { }

	ngOnInit() {
		this.getUserList();
	}

	getUserList(){
		let userList = this.userService.getUserList();
		userList.subscribe(data => this.success(data));	
	}

	success(data){
		this.userListData = data.userList;
	}

	deleteUser(index){
		let deleteData = {'id':index};
		let userDelete = this.userService.deleteUser(deleteData);
		userDelete.subscribe(data => this.getUserList());
	}

	isUser(user){
		let userData = JSON.parse(localStorage.getItem('userData'));
		if (userData.email == user.email) {
			return false;
		}else{
			return true;
		}
	}
}
