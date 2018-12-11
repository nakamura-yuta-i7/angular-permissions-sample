import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Permission Application !!';
  
  constructor(
    private permissionsService: NgxPermissionsService
  ) {}
  
  ngOnInit(): void {
    // const perm = ["ADMIN", "EDITOR"];
    const perm = ["EDITOR"];
    this.permissionsService.loadPermissions(perm);
    // this.permissionsService.loadPermissions(["GUEST"]);
  //   this.permissionsService.addPermission(['anotherPermissions', 'AnotherOne'], (permissionName, permissionsObject) => {
  //     console.log( {permissionName, permissionsObject} );
  //     return !!permissionsObject[permissionName];
  // });
  }
}
