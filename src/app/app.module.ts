import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LoginAdminModule } from './views/admin/login-admin/login-admin.module';
import { HomeComponent } from './views/front/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LoginAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
