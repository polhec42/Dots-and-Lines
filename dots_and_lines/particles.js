var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// c stands for context
var c = canvas.getContext('2d')


particles = [];

function Particle(x, y, w, h, dx, dy){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.dx = dx;
	this.dy = dy;

	this.draw = function(){
		
		c.fillRect(this.x, this.y, this.w, this.h);
		c.fillStyle = "blue";
		
	}

	this.update = function(){

		if(this.x > innerWidth || this.x < 0){
			this.dx = -this.dx;
		}
		if(this.y > innerHeight || this.y < 0){
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

function distance(x1, x2, y1, y2){
	return(Math.sqrt((x1 - x2)*(x1-x2) + (y1 - y2)*(y1 - y2)));
}

var size = 10;

for(var i = 0; i < 100; i++){
	particles[i] = new Particle(Math.random()*innerWidth, Math.random()*innerHeight, size, size, (Math.random() - 0.5)*4, (Math.random() - 0.5)*4);
}
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	//c.clearRect(last.x, last.y, last.width, last.height)
	
	c.strokeStyle = "rgba(0, 0, 255, 0.5)";
	c.lineWidth = 0.05;
		
	for(var i = 0; i < particles.length; i++){
			
			c.beginPath();	
			c.moveTo(particles[i].x + size/2, particles[i].y + size/2);		
			for(var j = i+1; j < particles.length - 1; j++){

			
				
				if(distance(particles[i].x, particles[j].x, particles[i].y, particles[j].y) < 150){
				
				
				c.lineTo(particles[j].x + size/2, particles[j].y + size/2);
				//c.closePath()
				c.stroke();
			}
					
		}
		
		particles[i].update();
	}

	/*
	for(var i = 0; i < particles.length; i++){
			
	}*/	
		
	


}

animate();
