// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from './auth.service';
// import { Injectable } from '@angular/core';

// @Injectable()
// export class AdminGuard implements CanActivate {
// 	constructor(private authService: AuthService) {}

// 	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
// 		this.authService.isAdmin().then(function(data) {
// 			return data;	
// 		})
// 	}
// }