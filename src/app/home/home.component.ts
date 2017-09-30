// Created By : Sangwin Gawande (http://sangw.in)

import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { UserListComponent } from '../user-list/user-list.component';
import { UserAddUpdateComponent } from '../user-add-update/user-add-update.component';

import { ProductListComponent } from '../product-list/product-list.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { AddCategoryComponent } from '../add-category/add-category.component';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	logOut(){
		localStorage.clear();
		this.router.navigate(['/login']);
	}

}


export const homeChildRoutes : Routes = [
{
	path: '',
	component: UserListComponent
},
{
	path: 'add',
	component: UserAddUpdateComponent
},
{
	path: 'product-list',
	component: ProductListComponent
},
{
	path: 'add-product',
	component: AddProductComponent
},
{
	path: 'update-product/:id',
	component: AddProductComponent
},
{
	path: 'category-list',
	component: CategoryListComponent
},
{
	path: 'add-category',
	component: AddCategoryComponent
},
{
	path: 'update-category/:id',
	component: AddCategoryComponent
},
{
	path: 'update/:id',
	component: UserAddUpdateComponent
}
];

// Created By : Sangwin Gawande (http://sangw.in)