import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> {
    return this._authService.IsAuthenticated().then((isAuth: boolean) => {
      if (isAuth === true) {
        return true;
      } else {
        this._router.navigate(['/']);
        return false;
      }
    });
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this._authService.IsAuthenticated().then((isAuth: boolean) => {
      if (isAuth === true) {
        return true;
      } else {
        this._router.navigate(['/']);
        return false;
      }
    });
  }
}
