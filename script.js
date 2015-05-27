$(document).ready(function() {
    firstProblem();
	secondProblem();
	thirdProblem();
	fourthProblem();
	fifthProblem();
	sixthProblem();
	seventhProblem();
	eighthProblem();
	ninthProblem();
});

//Problem 1
function firstProblem(){
	console.log('Problem 1');
	var arr = [3, 2, -2, -1, 0],
		ii = 0,
		len = arr.length;
	for(ii; ii < len; ii++){
		if((arr[ii] % 2 | 0) === 0) {
			console.log('Number "' + arr[ii] + '" is even!');
		} else {
			console.log('Number "' + arr[ii] + '" is odd!');
		}
	};
}; // end of function

//Problem 2
function secondProblem(){
	console.log('\nProblem 2\nDivisible by 7 and 5 by the same time:');
	var arr = [3, 0, 5, 7, 35, 140],
		ii = 0,
		len = arr.length;
	for (ii; ii < len; ii++){
		if ((arr[ii] % 5) === 0 && (arr[ii] % 7) === 0){
			console.log('\t"' + arr[ii] + '": true');
		} else {
			console.log('\t"' + arr[ii] + '": false');
		}
	};
}; // end of function

//Problem 3
function thirdProblem(){
	console.log('\nProblem 3\nRectangle area by given ');
	var size = {
		1: {width: 3, height: 4},
		2: {width: 2.5, height: 3},
		3: {width: 5, height: 5}
	};
	for(var item in size){
		console.log('\twidth = ' + size[item].width + ' and height = ' + size[item].height + ' is: ' +
			size[item].width * size[item].height);
	}
}; // end of function

//Problem 4
function fourthProblem(){
	console.log('\nProblem 4\nIs the third digit of the given integer 7?');
	var arr = [5, 701, 1732, 9703, 877, 777877, 9999799],
		ii = 0,
		len = arr.length;
		
	for(ii; ii < len; ii++){
		if(Math.floor((arr[ii] / 100) % 10) === 7){
			console.log('\t"' + arr[ii] + '": yes');
		} else {
			console.log('\t"' + arr[ii] + '": no');
		}
	}
}; // end of function

//Problem 5
function fifthProblem(){
	console.log('\nProblem 5\nIs the third bit of the given number 1?');
	var arr = [5, 8, 0, 15, 5343, 62241],
		ii = 0,
		len = arr.length;
	for(ii; ii < len; ii++){
		if(((arr[ii] >> 3) & 1) === 1){
			console.log('\t"' + arr[ii] + ': yes')
		} else {
			console.log('\t"' + arr[ii] + ': no')
		}
	}
}; // end of function

//Problem 6
function sixthProblem(){
	console.log('\nProblem 6\nIs the given point P(x, y) within a circle K({0, 0}, 5)');
	var circle = {
		1: {x: 0, y: 1, cx: 0, xy: 0, r: 5},
		2: {x: -5, y: 0, cx: 0, xy: 0, r: 5},
		3: {x: -4, y: 5, cx: 0, xy: 0, r: 5},
		4: {x: 1.5, y: -3, cx: 0, xy: 0, r: 5},
		5: {x: -4, y: -3.5, cx: 0, xy: 0, r: 5},
		6: {x: 100, y: -30, cx: 0, xy: 0, r: 5},
		7: {x: 0, y: 0, cx: 0, xy: 0, r: 5},
		8: {x: 0.2, y: -0.8, cx: 0, xy: 0, r: 5},
		9: {x: 0.9, y: -4.93, cx: 0, xy: 0, r: 5},
		10: {x: 2, y: 2.655, cx: 0, xy: 0, r: 5},
	};
	for(var item in circle){
		var result = ((circle[item].x * circle[item].x) + (circle[item].y * circle[item].y)) <=
			circle[item].r * circle[item].r;
		if(result === true){
			console.log('\tPoint P(' + circle[item].x +', ' + circle[item].y + '): yes');
		} else {
			console.log('\tPoint P(' + circle[item].x +', ' + circle[item].y + '): no');
		}
	}
}; // end of function

//Problem 7
function seventhProblem(){
	console.log('\nProblem 7\nThis number is prime:');
	var arr = [1, 2, 3, 4, 9, 37, 97, 51, -3, 0],
		ii = 0,
		len = arr.length;
	for(ii; ii < len; ii++){
		var prime = true;
		if(arr[ii] >= 2) {
			for(var i = 2; i <= Math.floor(Math.sqrt(arr[ii])); i++){
				if((arr[ii] % i) === 0){
					prime = false;
				}
			}
		} else {
			prime = false;
		}
		console.log('\t"' + arr[ii] + '" ' + prime);
	}
}; // end of function

//Problem 8
function eighthProblem(){
	console.log('\nProblem 8\nTrapezoid area by given ');
	var size = {
		1: {side_a: 5, side_b: 7, height: 12},
		2: {side_a: 2, side_b: 1, height: 33},
		3: {side_a: 8.5, side_b: 4.3, height: 2.7},
		4: {side_a: 100, side_b: 200, height: 300},
		5: {side_a: 0.222, side_b: 0.333, height: 0.555}
	};
	for(var item in size){
		var result = (size[item].side_a + size[item].side_b) / 2  * size[item].height;
		console.log('\tside one = ' + size[item].side_a + ', side two = ' + size[item].side_b + ' and height = ' +
			size[item].height +' is: ' + result);
	}
}; // end of function

//Problem 9
function ninthProblem(){
	console.log('\nProblem 9\nIs the given point P(x, y) within a circle K({0, 0}, 5) and outside a rectangle'+
	'R(top = 1, left = -1, width = 6, height = 2)');
	var circle = {
		1: {x: 1, y: 4, r: 3},
		2: {x: 3, y: 2, r: 3},
		3: {x: 0, y: 1, r: 3},
		4: {x: 4, y: 1, r: 3},
		5: {x: 2, y: 0, r: 3},
		6: {x: 4, y: 0, r: 3},
		7: {x: 2.5, y: 1.5, r: 3},
		8: {x: 3.5, y: 1.5, r: 3},
		9: {x: -100, y: -100, r: 3},
		c: 1
	},
		rectangle = {top: 1, left: -1, width: 6, height: 2};
	for(var item in circle) {
		var insideCircle = (((circle[item].x - circle.c) * (circle[item].x - circle.c)) + 
							((circle[item].y - circle.c) * (circle[item].y - circle.c))) <=
							circle[item].r * circle[item].r;
		var insideRect = (circle[item].x <= rectangle.left + rectangle.width) && (circle[item].x >= rectangle.left)	&&
						(circle[item].y <= rectangle.top) && (circle[item].y >= rectangle.top - rectangle.height);
		if(insideCircle === true && insideRect !== true) {
			console.log('\tPoint P(' + circle[item].x +', ' + circle[item].y + '): yes');
		} else {
			console.log('\tPoint P(' + circle[item].x +', ' + circle[item].y + '): no');
		}
	}
}; // end of function
