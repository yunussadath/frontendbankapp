import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { //login - 4200
    path:'',component: LoginComponent
  },
  { //dashboard 4200/dashboard
    path:'dashboard',component: DashboardComponent
  },
  {
    path:'register',component: RegisterComponent 
  },
{
  path:'transaction',component: TransactionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
