import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SeeAllComponent } from './pages/see-all/see-all.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, },
    { path: 'home', component: HomeComponent, },
    { path: 'seeall', component: SeeAllComponent },
];
