import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { ProductComponent } from './product';
import { SalesComponent } from './sales';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
     { path: 'home', component: HomeComponent },
     { path: 'product', component: ProductComponent },
     { path: 'sales', component: SalesComponent },

    // otherwise redirect to home
    
];

export const routing = RouterModule.forRoot(appRoutes);