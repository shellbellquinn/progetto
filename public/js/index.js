$(() => {

	$('#submit-board').on('click', (event)=>{
		event.preventDefault();
		let board = {
			name: $('#board-name').val()
		};

		console.log("HI1")

		$.post('/api/boards', board).then(data=>{
			console.log(data)
			console.log(window.location.href);
			let url = window.location.href;
			window.location.assign(url);
		});
	});


	$('.delete-board').on('click', (event) => {
		event.preventDefault();
		const boardId = $(".delete-board").data('id')
		console.log("Deleting board with id: " + boardId)

		$.ajax({
			url: '/api/boards/' + boardId,
			type: 'DELETE',
			success: () => {
				console.log("Board deleted!")
				let url = window.location.href;
				window.location.assign(url);
			}
		})
	})

	$('.submit-list').on('submit', (event) => {
		event.preventDefault();
		console.log('ready');
		let list = {
			title: $('#list-name').val(),
			BoardId: $('.submit-list').attr('data-id')
		};
		console.log(list);
		$.post('/api/lists', list).then(data=>{
				console.log(data);
				let url = window.location.href;
				window.location.assign(url);
		});
	});

	$('.delete-list').on('click', (event) => {
		event.preventDefault();
		const listId = $(".delete-list").data('id')
		console.log("Deleting list with id: " + listId)

		$.ajax({
			url: '/api/lists/' + listId,
			type: 'DELETE',
			success: () => {
				console.log("List deleted!")
				let url = window.location.href;
				window.location.assign(url);
			}
		})
	})

	$('.submit-task').on('submit', function(event){
		event.preventDefault();
		console.log('task submitted');
		let id = $(this).find('input').val();

		let task = {
			body: $(this).find('input').val(),
			ListId: $(this).data('id')
		};
		$.post('/api/tasks', task).then(data=>{
				console.log(data);
				let url = window.location.href;
				window.location.assign(url);
		});
	});

	$('.delete-task').on('click', (event) => {
		event.preventDefault();
		const taskId = $(".delete-task").data('id')
		console.log("Deleting task with id: " + taskId)

		$.ajax({
			url: '/api/tasks/' + taskId,
			type: 'DELETE',
			success: () => {
				console.log("task deleted!")
				let url = window.location.href;
				window.location.assign(url);
			}
		})
	})
});