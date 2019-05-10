import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({
	isFresh: true,
	todoList: computed('isFresh', function(){
		todoList = this.model.todoList;
	}),

	actions: {
		addTodo() {
			// console.log(JSON.parse(localStorage.getItem('todoList')));
			// console.log(this.model.todoList);
			let r = {
				name: 'liao',
				content: 'today recite the english sentence'
			};
			let l_list = JSON.parse(localStorage.getItem('todoList'));
			l_list.push(r);
			localStorage.setItem('todoList', JSON.stringify(l_list));
			this.model.todoList.pushObject(r);
			this.set('isFresh', !this.isFresh);
			
		},
	}
});
