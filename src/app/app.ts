import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular19Tut_2');

  users = [
    {
      id: '1',
      name: 'Anil',
      age:28
    },
        {
      id: '2',
      name: 'Sam',
      age:29
    },
        {
      id: '3',
      name: 'Bruce',
      age:31
    },
        {
      id: '3',
      name: 'Peter',
      age:23
    },
        {
      id: '5',
      name: 'Tony',
      age:45
    },
  ];
}
