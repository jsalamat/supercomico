var fade = document.querySelector('.fade');
var topNav = document.querySelector('.top');
var title = document.querySelector('.title');
var title = document.querySelector('.icon');
var image = document.getElementById('watercolor');

var aquarelle = new Aquarelle(image, 'assets/images/mask.png', {
	autoplay: true,
	loop: false
});

aquarelle.addEventListener('created', function() {
	fade.style.opacity = '1';
	var canvas = this.getCanvas();
	canvas.removeAttribute('style');
	image.parentNode.insertBefore(canvas, image.nextSibling);
	image.parentNode.removeChild(image);
});

aquarelle.addEventListener('changed', function(event) {
	topNav.style.opacity = this.transitionInRange(0, 1, 5000, 8000);
	var canvas = this.getCanvas();
	canvas.style.webkitTransform = canvas.style;
	transform = 'translate(-50%, -50%) scale('+ this.transitionInRange(.75, 1) + ')'
});

title.style.opacity = this.
transitionInRange(0, 1, 0, 2500);
title.style.webkitTransform = title.style.
transform = 'scale(' + this.
transitionInRange(.8, 1, 0, 4500) + ')';
icon.style.webkitFilter = 'blur(' + event.
target.transitionInRange(4, 0, 3500, 4500) + 'px)';
icon.style.opacity = event.target.
transitionInRange(0, 1, 3500, 4500);
icon.style.webkitTransform = icon.style.
transform = 'scale(' + event.target.
transitionInRange(1.5, 1, 3500, 5000) + ')';
});