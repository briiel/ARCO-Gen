
import { Component } from '@angular/core';
import { RouterModule,RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
/*import { Createform2Component } from '../createform2/createform2.component';*/
import { DashboardComponent } from '../dashboard/dashboard.component';

export class CreateformComponent {

}


@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet, DashboardComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

}
