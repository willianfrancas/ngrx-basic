import { PersonNew, PersonAll, PersonUpdate, PersonDelete } from './store/person.actions';
import { AppState } from './store/index';
import { Person } from './models/person.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromPeopleSelectors from './store/person.selectors';
// import * as faker from 'faker';
const faker = {
  name: '',
  address: {
    country: () => '{}',
    streetAdress: () => '{}',
    city: () => '{}',
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  people$: Observable<Person[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.store.dispatch(new PersonAll());
    this.people$ = this.store.select(fromPeopleSelectors.selectAll);
    // this.people$ = this.store.pipe(select('people'));
  }

  addNew() {
    let person: Person = {
      name: faker.name,
      age: Math.round(Math.random() * 100),
      address: faker.address.streetAdress(),
      city: faker.address.city(),
      country: faker.address.country(),
      _id: new Date().getMilliseconds().toString(),
    };

    this.store.dispatch(new PersonNew({ person }));

  }

  update(person: Person) {
    person.name = faker.name;
    person.age = Math.round(Math.random() * 100);
    person.address = faker.address.streetAdress();
    person.city = faker.address.city();
    person.country = faker.address.country();
    person._id = new Date().getMilliseconds().toString();

    this.store.dispatch(new PersonUpdate({ id: person._id, changes: person }));
  }

  delete(person: Person) {
    if (person._id) this.store.dispatch(new PersonDelete({ id: person._id }));
  }

}
