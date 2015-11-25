
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame    ||
	window.oRequestAnimationFrame      ||
	window.msRequestAnimationFrame     ||
	function( callback ){
		window.setTimeout(callback, 1000 / 60);
	};
})();
// usage:
// instead of setInterval(render, 16) ....

(function animloop(){
	requestAnimFrame(animloop);
	render();
})();
// place the rAF *before* the render() to assure as close to
// 60fps with the setTimeout fallback.
