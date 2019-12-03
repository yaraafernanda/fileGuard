import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableviewComponent } from './tableview/tableview.component';
import { HomemenuComponent } from './homemenu/homemenu.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TablefilteredComponent } from './tablefilteredFile/tablefiltered.component';
import { TablefilteredUserComponent } from './tablefiltered-user/tablefiltered-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableviewComponent,
    HomemenuComponent,
    TablefilteredComponent,
    TablefilteredUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
