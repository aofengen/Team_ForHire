import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminGuard  {
	constructor(private authService: AuthService) {}

	// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
	// 	return this.authService.isAdmin();	
	//}
}