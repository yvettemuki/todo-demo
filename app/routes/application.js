import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel(){
		window.console.log("before the model test!");
		this.transitionTo('index');
	},
	model() {
		// let todo_db = this.store.createRecord('todoList', {
		// 	name: '',
		// 	content: ''
		// });
		// return todo_db;
	}
});
