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

});