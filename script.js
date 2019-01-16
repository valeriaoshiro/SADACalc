$(function () {
	const operation = [];

	$(".num").click(function() {
		let input = $(this).html();
		let lastEl = operation[operation.length - 1];

		//if last click was oper or if array is empty
		if (typeof lastEl === "string" || operation.length === 0) {
			operation.push(parseInt(input));
		}
		//else if last click was number
		else if (typeof lastEl === "number") {
			let temp = lastEl.toString() + input;
			operation[operation.length - 1] = parseInt(temp);
		}
		console.log(operation);
	});

	$(".oper").click(function() {
		let input = $(this).html();
		let lastEl = operation[operation.length - 1];
		

		//if operation array is empty
		if (operation.length === 0) {
			operation.push(0);
			operation.push(input);
		}
		//else if last click was oper
		else if (typeof lastEl === "string") {
			operation[operation.length - 1] = input;
		}
		//else if last click was number
		else if (typeof lastEl === "number"){
			operation.push(input);
		}
		
		console.log(operation);
	});

	$(".enter").click(function() {
		let input = $(this).html();
		let lastEl = operation[operation.length - 1];		
		
		if(operation.length >= 2){
			//if last click was operator
			if(typeof lastEl === "string"){
				operation.push(operation[operation.length - 2]);
			}

			//ajax
		}
		console.log(operation);
	});

	$(".clear").click(function() {
		operation.length = 0;
		console.log(operation);
	});
});