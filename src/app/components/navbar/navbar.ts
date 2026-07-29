import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, JsonPipe],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Navbar {
  routes = routes.map((route) => {
    return {
      title: route.title,
      path: route.path
    }
  })
}
