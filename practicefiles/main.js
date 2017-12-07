// Root Instance
// └─ TodoList
//    ├─ TodoItem
//    │  ├─ DeleteTodoButton
//    │  └─ EditTodoButton
//    └─ TodoListFooter
//       ├─ ClearTodosButton
//       └─ TodoListStatistics

// Buttons: Add / Delete / Edit Todo-item.

	var app = new Vue({
		el: '#app',
		data: {
			message: 'Hello!'
		}
	})

	var app2 = new Vue({
		el: '#app2',
		data: {
			message: 'You loaded this page on ' + new Date().toLocaleString()
		}
	})

	// when app3.seen is set to false, the text will disappear
	var app3 = new Vue({
		el: '#app3',
		data: {
			seen: true
		}
	})

	// app4.todos.push({ text: 'New item'}) adds a new item to the list.
	var app4 = new Vue({
		el: '#app4',
		data: {
			todos: [
			{ text: 'Learn Javascript'},
			{ text: 'Learn Vue'},
			{ text: 'Build something awesome' }
			]
		}
	})

	var app5 = new Vue({
		el: '#app5',
		data: {
			message: 'Hello Vue.js!'
		},
		methods: {
			reverseMessage: function() {
				this.message = this.message.split('').reverse().join('')
			}
		}
	})

	var app6 = new Vue({
		el: '#app6',
		data: {
			message: 'Hello Vue!	'
		}
	})

	//first component
	Vue.component('todo-item', {
		props: ['todo'],
		template: '<li>{{ todo.text }}</li>'
	})

	var app7 = new Vue({
		el: '#app7',
		data: {
			groceryList: [
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'Whatever else humans are supposed to eat' }
			]
		}
	})