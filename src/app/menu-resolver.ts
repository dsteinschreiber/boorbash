import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Menu} from "./interfaces/menu";
import {Observable} from "rxjs";
import {BackEndConnectionService} from "./back-end-connection.service";

@Injectable({ providedIn: 'root'})

export class MenuResolver implements Resolve<Menu> {
  constructor(
    private backendService: BackEndConnectionService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Menu> | Promise<Menu> | Menu {
    return this.backendService.getMenu(route.paramMap.get('restaurantId')! as unknown as number);
  }

}
