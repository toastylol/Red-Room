let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
	let items = document.querySelectorAll('.item')
	document.querySelector('.slider').appendChild(items[0])
});

prev.addEventListener('click', function(){
	let items = document.querySelectorAll('.item')
	document.querySelector('.slider').prepend(items[items.length - 1])
});
window.addEventListener('load', function() {
    // Set delay time (in milliseconds)
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000); // 3000 ms = 3 seconds
});
