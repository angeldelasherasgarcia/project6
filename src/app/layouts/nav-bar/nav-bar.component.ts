import { OnInit,Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'layouts/nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public nombreUsuario : String;
  public centro : String;
  public isActive : String = 'convenios';
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.nombreUsuario="NOMBRE USUARIO"
    this.centro= "CENTRO"
  }
  public showModel(model):void{
    console.log(model);
    this.isActive = model;
  }
}
