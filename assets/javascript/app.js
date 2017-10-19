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