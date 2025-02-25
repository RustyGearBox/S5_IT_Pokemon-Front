import { Component } from '@angular/core';

import { FooterComponent } from "./shared/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, FooterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'S5_IT_Pokemon-Front';
}
