import { Person } from './models/person.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  people$: Observable<Person[]>;

  title = 'ngrx-basic';

  addNew() {
  }

  update(person: Person){}
  delete(person: Person){}

}
