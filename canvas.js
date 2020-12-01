var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');



//random color!
function picColor(){
	return a = 'rgb('+
	Math.floor(Math.random()*256)+','+
	Math.floor(Math.random()*256)+','+
	Math.floor(Math.random()*256)+')';
};

function addCircle(){
	var radius = 30;
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var dx = 5 * (Math.random() - 0.5);
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dy = 5 * (Math.random() - 0.5);
	circleArray.push(new Circle(x, y, dx, dy, radius));
}



//rectangles
// ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'
// ctx.fillRect(400, 100, 100, 100);
// ctx.fillStyle = 'rgba(0, 0, 255, 0.5)'
// ctx.fillRect(200, 300, 100, 100);

// for (var i = 0; i < 3; i++){
// 	cr = picColor();
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	ctx.fillStyle = cr;
// 	ctx.fillRect(x, y, 100, 100);
// }


//line
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 150);
// ctx.lineTo(500, 250);
// ctx.strokeStyle = "#ff6666";
// ctx.stroke();



// ctx.beginPath();
// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// ctx.moveTo(x, y);
// for(i = 0; i < 3; i++){
// 	var x1 = Math.random() * window.innerWidth;
// 	var y1 = Math.random() * window.innerHeight;
// 	ctx.lineTo(x1, y1);
// }
// ctx.lineTo(x, y);
// cr = picColor();
// ctx.strokeStyle = cr;
// ctx.stroke();


// arc or circle
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI*2, true);
// ctx.strokeStyle = 'blue';
// ctx.stroke();

// for (var i = 0; i < 3; i++){
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	ctx.beginPath();
// 	ctx.arc(x, y, 50, 0, Math.PI*2, true);
// 	cr = picColor();
// 	ctx.strokeStyle = cr;
// 	ctx.stroke();
// }

var clickokay = undefined;

var mouse = {
	x: undefined,
	y: undefined,
}


window.addEventListener('mousemove', function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
	console.log(mouse);
});

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

window.addEventListener('click', function(){
	for (a=0; a<=circleArray.length; a++){
		if (mouse.x - circleArray[a].x < 70 && mouse.x - circleArray[a].x > -70 && mouse.y - circleArray[a].y < 70 && mouse.y - circleArray[a].y > -70){
			for (b=0; b<(Math.random()*5); b++){
			var radius = 30;
			var x = Math.random() * (innerWidth - radius * 2) + radius;
			var dx = 20 * (Math.random() - 0.5);
			var y = Math.random() * (innerHeight - radius * 2) + radius;
			var dy = 20 * (Math.random() - 0.5);
			circleArray.push(new Circle(x, y, dx, dy, radius))};
			clickokay++;
			


		} else {
			alert('PERDEU! Pontos: ' + clickokay);
			init();
			
		}
	}
});	





// 	if(

// 	   ){
// 	alert('PARABÉNS! FASE: ' + circleArray.length);
// 	addCircle()
// } else if {








	function Circle (x, y, dx, dy, radius) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		cr = picColor();	
		this.color = cr;



		this.draw = function() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
			ctx.strokeStyle = this.color;
			ctx.lineWidth = 5;
			ctx.stroke();
			ctx.fill();
			ctx.fillStyle = this.color;
		}

		this.update = function() {
			if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
				this.dx = -this.dx;
			}
			if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
				this.dy = -this.dy;
			}

			this.x+=this.dx;
			this.y+=this.dy;

		// interactity
		var maxRadius = 30;
		var minRadius = 10;

		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
			if (this.radius < maxRadius) {
				this.radius+=5;
			}
		} else if (this.radius > minRadius) {
			this.radius-=1;
		}
		

		// if (this.radius < 40) {
		// 	if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
		// 		this.radius +=2;
		// 	 if (this.radius < 30 && this.radius > 10) {
		// 		this.radius -=1;
		// 	}}
		// }

		this.draw();
	}
}


var circleArray = [];

function init(){
	clickokay = 0;
	circleArray = [];
	for (var i = 0; i < 1; i++){
		var radius = 30;
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var dx = 2 * (Math.random()) + 5;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dy = 2 * (Math.random()) + 5;
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}

for (var i = 0; i < 5; i++){
	// random var for circles!
			//-----start!
			var radius = 30;
			var x = Math.random() * (innerWidth - radius * 2) + radius;
			var dx = 30 * (Math.random() - 0.5);
			var y = Math.random() * (innerHeight - radius * 2) + radius;
			var dy = 30 * (Math.random() - 0.5);
			//-----end!
			circleArray.push(new Circle(x, y, dx, dy, radius));
		}

		function animate(){
			requestAnimationFrame(animate);

			ctx.clearRect(0, 0, innerWidth, innerHeight);
	// circle.update();

	for (var i = 0; i < circleArray.length; i++){
		circleArray[i].update();
	}
}



init();
animate();































