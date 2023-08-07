

// Promise to swap two blocks
function swap(el1, el2) {
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {

			// For waiting for .25 sec
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
		});
	});
}

// Asynchronous BubbleSort function
async function BubbleSort(delay = 100) {	
	var blocks = document.querySelectorAll(".bar");

	// BubbleSort Algorithm
	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {

			// To change background-color of the
			// blocks to be compared
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			// To wait for .1 sec
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
						.childNodes[0].innerHTML);

						
						var barValue = document.getElementById("ele");



			// To compare value of two blocks
			if (value1 > value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".bar");
			}

			// Changing the color to the previous one
			blocks[j].style.backgroundColor = "#5b8995";
			blocks[j + 1].style.backgroundColor = "#5b8995";
		}

		//changing the color of greatest element
		//found in the above traversal
		blocks[blocks.length - i - 1]
				.style.backgroundColor = "#13CE66";
	}

	barValue.innerHTML = `<h3> Array Sorted </h3>`;

    document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "black";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "black";
document.getElementById("Button3").disabled = false;
document.getElementById("Button3").style.backgroundColor = "black";
}

// Calling generatearray function
generatearray();

// Calling BubbleSort function
BubbleSort();
