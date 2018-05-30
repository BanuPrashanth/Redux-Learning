import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {
	
	describe('A List', () => {
		function addMovie(currentState, movie){
			return currentState.update('movies', movies => movies.push(movie));
		}

		it('is immutable', () => {
			let state = Map({
				movies: List.of('Trainspotting', '28 days Later')
			});
			let nextState = addMovie(state, 'Sunshine');

			expect(nextState).to.equal(Map({
				movies: List.of(
					'Trainspotting',
					'28 days Later',
					'Sunshine'
				)
			}));
			expect(state).to.equal(Map({
				movies: List.of(
				'Trainspotting',
				'28 days Later'
				)
				}));
		});
	});
});