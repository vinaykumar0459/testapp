import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppComponent } from './app.component'

const routes: Routes = [
  { path: '', component : AppComponent },
  { path : 'profile', component : ProfileComponent },
  { path : 'register', component : RegisterComponent },
  { path : '*', component : NotfoundComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}