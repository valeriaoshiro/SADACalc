$(function () {
	const operation = [];

	$(".num").click(function () {
		let input = $(this).html();
		let lastEl = operation[operation.length - 1];

		//if last click was oper or if array is empty
		if (typeof lastEl === "string" || operation.length === 0) {
			operation.push(parseInt(input));
			$("input").val(input);
		}
		//else if last click was number
		else if (typeof lastEl === "number") {
			let temp = lastEl.toString() + input;
			operation[operation.length - 1] = parseInt(temp);
			$("input").val(temp);
		}
		console.log(operation);
	});

	$(".oper").click(function () {
		let input = $(this).html();
		let displayNum = $("input").val();
		let lastEl = operation[operation.length - 1];

		//if operation array is empty and no number in display
		if (operation.length === 0 && displayNum === "0") {
			operation.push(0);
			operation.push(input);
		}
		//else if operation array is empty but there is a num in display
		else if (operation.length === 0 && displayNum !== "0") {
			operation.push(parseInt(displayNum));
			operation.push(input);
		}
		//else if last click was oper
		else if (typeof lastEl === "string") {
			operation[operation.length - 1] = input;
		}
		//else if last click was number
		else if (typeof lastEl === "number") {
			operation.push(input);
		}

		console.log(operation);
	});

	$(".enter").click(function () {
		let input = $(this).html();
		let lastEl = operation[operation.length - 1];

		if (operation.length >= 2) {
			//if last click was operator
			if (typeof lastEl === "string") {
				operation.push(operation[operation.length - 2]);
			}

			//ajax
			$.getJSON("	http://dummy.restapiexample.com/api/v1/create", { operation }, function () {
				console.log("success");
			})
				.fail(function (error) {
					let answer = 0;
					let temp = "";
					for (let i = 0; i < operation.length; i++) {
						if (i === 0)
							answer = operation[0];
						else if (i % 2 === 0) {
							switch (operation[i - 1]) {
								case "+":
									answer = answer + operation[i];
									break;
								case "-":
									answer = answer - operation[i];
									break;
								case "*":
									answer = answer * operation[i];
									break;
								case "/":
									answer = answer / operation[i];
									break;
								default:
									break;
							}
						}
					}
					console.log(typeof answer, answer);
					if (answer === Infinity || isNaN(answer)) {
						$("input").val("Error");
					}
					else {
						$("input").val(Math(answer));
					}
					operation.length = 0;
				});
		}
	});

	$(".clear").click(function () {
		operation.length = 0;
		$("input").val("0");
		console.log(operation);
	});
});