import { Component } from '@angular/core';
import { RouterModule,RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';



@Component({
  selector: 'app-report',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet, DashboardComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

}
