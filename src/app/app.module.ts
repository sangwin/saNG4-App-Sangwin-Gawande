// Created By : Sangwin Gawande (http://sangw.in)

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 

// Services
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { ProductsService } from './products.service';
import { CategoryService } from './category.service';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { homeChildRoutes } from './home/home.component';
import { UserAddUpdateComponent } from './user-add-update/user-add-update.component';
import { PhonePipe } from './phone.pipe';
import { UserhoverDirective } from './userhover.directive';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';

//Routes
const routes : Routes = [
{
  path: '',
  component: HomeComponent,
  children :homeChildRoutes
  // canActivate : [AuthService]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: UserAddUpdateComponent
},
{
  path: '**',
  redirectTo: ''
}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    UserAddUpdateComponent,
    PhonePipe,
    UserhoverDirective,
    ProductListComponent,
    AddProductComponent,
    CategoryListComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  RouterModule.forRoot(routes)
  ],
  providers: [AuthService,UserService,CategoryService,ProductsService],
  bootstrap: [AppComponent]
})

export class AppModule { }

// Created By : Sangwin Gawande (http://sangw.in)