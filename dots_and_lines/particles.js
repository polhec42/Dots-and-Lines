var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// c stands for context
var c = canvas.getContext('2d')


particles = [];

function Particle(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.draw = function(){
		
		c.fillRect(this.x, this.y, this.w, this.h);
		c.fillStyle = "blue";
	}

	this.update = function(){
		this.draw();


	}
}

function distance(x1, x2, y1, y2){
	return(Math.sqrt((x1 - x2)*(x1-x2) + (y1 - y2)*(y1 - y2)));
}

var size = 10;

for(var i = 0; i < 150; i++){
	particles[i] = new Particle(Math.random()*innerWidth, Math.random()*innerHeight, size, size);
}
function animate(){
	requestAnimationFrame(animate);
	
	for(var i = 0; i < particles.length; i++){
		particles[i].update();	
	

		for(var j = i+1; j < particles.length - 1; j++){
			if(distance(particles[i].x, particles[j].x, particles[i].y, particles[j].y) < 150){
				c.beginPath();
				c.strokeStyle = "rgba(0, 0, 255, 0.05)";
				c.moveTo(particles[i].x + size/2, particles[i].y + size/2);
				c.lineWidth = 0.05;
				c.lineTo(particles[j].x + size/2, particles[j].y + size/2);
				c.stroke();
			}
		}
		
	
	}
}

animate();
