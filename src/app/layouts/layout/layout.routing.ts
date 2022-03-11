import { Routes } from '@angular/router';

import { LayoutComponent } from './layout.component'

export const LayoutRoutes: Routes = [
  

    // Admin routes
    {
        path       : '',
        redirectTo: 'login',
        component  : LayoutComponent,
        children   : [

            {path: '', loadChildren: () => import('app/modules/list/list.module').then(m => m.ListModule)},
           
        
            {path: 'login', loadChildren: () => import('app/modules/login/login.module').then(m => m.LoginModule)},
            
        ]
    },
];
