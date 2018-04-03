import { LOCALE_ID, NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import localeJaExtra from '@angular/common/locales/ja';
registerLocaleData(localeJa, 'ja', localeJaExtra);

import { NgxPermissionsGuard } from 'ngx-permissions';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NoAuthorizationComponent } from './no-authorization/no-authorization.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'no-authorization', component: NoAuthorizationComponent },
  { path: 'admin', component: AdminComponent, canActivate: [NgxPermissionsGuard],
    data: { 
      permissions: {
        only: 'ADMIN',
        // redirectTo: '/no-authorization',
        redirectTo: {
          navigationCommands: '/no-authorization',
          navigationExtras: {
            skipLocationChange: true
          }
        },
      },
    }
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'ja' } ],
  declarations: []
})
export class AppRoutingModule { }
