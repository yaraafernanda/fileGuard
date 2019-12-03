import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomemenuComponent } from './homemenu/homemenu.component';
import { TableviewComponent } from './tableview/tableview.component';
import { TablefilteredComponent } from './tablefilteredFile/tablefiltered.component';
import { TablefilteredUserComponent } from './tablefiltered-user/tablefiltered-user.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomemenuComponent},
  {path: 'view', component: TableviewComponent},
  {path: 'filteredFile', component: TablefilteredComponent},
  {path: 'filteredUser', component: TablefilteredUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
