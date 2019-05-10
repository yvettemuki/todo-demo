import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model() {
		let list = [];
		let l_list = JSON.parse(localStorage.getItem('todoList'));
		if(l_list) {
			return RSVP.hash({
				todoList: l_list
			});
		}
		localStorage.setItem('todoList', JSON.stringify(list));
		
	}
});
