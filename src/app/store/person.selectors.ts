import { createFeatureSelector } from '@ngrx/store';
import * as fromPeoplePersonReducer from './person.reducer';

export const peopleState = createFeatureSelector<fromPeoplePersonReducer.PeopleState>('people');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromPeoplePersonReducer.peopleAdapter.getSelectors(peopleState)
