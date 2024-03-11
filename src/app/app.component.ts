import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CreateformComponent } from './createform/createform.component';
/*import { Createform2Component } from './createform2/createform2.component';
import { Createform3Component } from './createform3/createform3.component'*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SummaryComponent } from './summary/summary.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateformComponent, RouterLink, RouterModule, DashboardComponent, NavbarComponent,SummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  routes =  {
    
    path: '/create',
    label: 'Create',
  }

  title = 'ARCO';
}
