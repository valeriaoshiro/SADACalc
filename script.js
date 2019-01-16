$(function () {
	const operation = [];

	$(".num").click(function () {
		let input = $(this).html();

		//if last click was oper
		if (typeof operation[operation.length - 1] === "string" || operation.length === 0) {
			operation.push(parseInt(input));
		}
		//else if last click was number
		else if (typeof operation[operation.length - 1] === "number") {
			let temp = operation[operation.length - 1].toString() + input;
			operation[operation.length - 1] = parseInt(temp);
		}
		console.log(operation);
	});

	$(".oper").click(function () {
		let input = $(this).html();

		//if operation array is empty
		if (operation.length === 0) {
			operation.push(0);
			operation.push(input);
		}
		//if last click was oper
		else if (typeof operation[operation.length - 1] === "string") {
			operation[operation.length - 1] = input;
		}
		//else if last click was number
		else if (typeof operation[operation.length - 1] === "number"){
			operation.push(input);
		}
		
		console.log(operation);
	});

	$(".enter").click(function () {

	});
});