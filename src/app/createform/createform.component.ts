import { Component } from '@angular/core';
import { RouterModule,RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
/*import { Createform2Component } from '../createform2/createform2.component';*/


@Component({
  selector: 'app-createform',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './createform.component.html',
  styleUrl: './createform.component.css'
})
export class CreateformComponent {

}
